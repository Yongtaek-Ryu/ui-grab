import { execFileSync, spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { dirname, resolve } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const appDir = resolve(repoRoot, "packages/e2e-app");
const devPort = 5175;
const devUrl = `http://localhost:${devPort}`;
const expectedTitle = "<title>UI Grab E2E Playground</title>";
const pnpmCommand = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

async function probeServer(timeoutMs = 1500) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(devUrl, {
      signal: controller.signal,
      headers: { accept: "text/html" },
    });
    const body = await response.text();

    return {
      healthy: response.ok && body.includes(expectedTitle),
      status: response.status,
      body,
    };
  } catch (error) {
    return {
      healthy: false,
      error,
    };
  } finally {
    clearTimeout(timer);
  }
}

function listListenerPids() {
  try {
    const output = execFileSync(
      "lsof",
      ["-nP", "-t", `-iTCP:${devPort}`, "-sTCP:LISTEN"],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();

    return output ? output.split(/\s+/).filter(Boolean).map(Number) : [];
  } catch (error) {
    if (error && typeof error === "object" && "status" in error && error.status === 1) {
      return [];
    }
    throw error;
  }
}

function readCommand(pid) {
  return execFileSync("ps", ["-p", String(pid), "-o", "command="], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  }).trim();
}

function isManagedListener(command) {
  return (
    command.includes(`${repoRoot}/packages/e2e-app`) &&
    command.includes("vite")
  );
}

async function terminatePid(pid) {
  for (const signal of ["SIGTERM", "SIGKILL"]) {
    try {
      process.kill(pid, signal);
    } catch (error) {
      if (error && typeof error === "object" && "code" in error && error.code === "ESRCH") {
        return;
      }
      throw error;
    }

    await delay(300);

    if (!listListenerPids().includes(pid)) {
      return;
    }
  }
}

async function ensurePortReady() {
  const existingServer = await probeServer();
  if (existingServer.healthy) {
    console.log(`UI Grab E2E dev server already running at ${devUrl}.`);
    return false;
  }

  const listenerPids = listListenerPids();
  if (listenerPids.length === 0) {
    return true;
  }

  const listeners = listenerPids.map((pid) => ({
    pid,
    command: readCommand(pid),
  }));

  const foreignListener = listeners.find(
    (listener) => !isManagedListener(listener.command),
  );

  if (foreignListener) {
    console.error(
      `Port ${devPort} is already in use by another process (PID ${foreignListener.pid}).`,
    );
    console.error(foreignListener.command);
    process.exit(1);
  }

  console.log(
    `Port ${devPort} is occupied by an unresponsive local e2e-app server. Cleaning it up...`,
  );

  for (const listener of listeners) {
    await terminatePid(listener.pid);
  }

  await delay(300);

  const remainingListeners = listListenerPids();
  if (remainingListeners.length > 0) {
    console.error(
      `Port ${devPort} is still occupied after cleanup: ${remainingListeners.join(", ")}`,
    );
    process.exit(1);
  }

  return true;
}

async function main() {
  const shouldStartServer = await ensurePortReady();
  if (!shouldStartServer) {
    process.exit(0);
  }

  const child = spawn(pnpmCommand, ["--dir", appDir, "dev:raw"], {
    cwd: repoRoot,
    stdio: "inherit",
    env: process.env,
  });

  child.on("error", (error) => {
    console.error(error);
    process.exit(1);
  });

  child.on("exit", (code, signal) => {
    if (signal) {
      process.kill(process.pid, signal);
      return;
    }

    process.exit(code ?? 0);
  });
}

await main();
