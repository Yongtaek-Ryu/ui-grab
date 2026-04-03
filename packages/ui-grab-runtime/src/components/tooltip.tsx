import {
  createSignal,
  createEffect,
  on,
  onCleanup,
  Show,
  splitProps,
} from "solid-js";
import type { Component, JSX } from "solid-js";
import { cn } from "../utils/cn.js";
import {
  TOOLTIP_BASE_CLASS,
  TOOLTIP_DELAY_MS,
  TOOLTIP_GRACE_PERIOD_MS,
  Z_INDEX_OVERLAY,
} from "../constants.js";

let lastCloseTimestamp = 0;

const wasTooltipRecentlyVisible = () => {
  return Date.now() - lastCloseTimestamp < TOOLTIP_GRACE_PERIOD_MS;
};

interface TooltipProps extends JSX.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  position: "top" | "bottom" | "left" | "right";
  children: JSX.Element;
}

export const Tooltip: Component<TooltipProps> = (props) => {
  const [local, rest] = splitProps(props, [
    "visible",
    "position",
    "children",
    "class",
    "style",
  ]);
  const [delayedVisible, setDelayedVisible] = createSignal(false);
  const [shouldAnimate, setShouldAnimate] = createSignal(true);
  let delayTimeoutId: ReturnType<typeof setTimeout> | undefined;

  createEffect(
    on(
      () => local.visible,
      (isVisible) => {
        if (delayTimeoutId !== undefined) {
          clearTimeout(delayTimeoutId);
          delayTimeoutId = undefined;
        }

        if (isVisible) {
          if (wasTooltipRecentlyVisible()) {
            setShouldAnimate(false);
            setDelayedVisible(true);
          } else {
            setShouldAnimate(true);
            delayTimeoutId = setTimeout(() => {
              setDelayedVisible(true);
            }, TOOLTIP_DELAY_MS);
          }
        } else {
          if (delayedVisible()) {
            lastCloseTimestamp = Date.now();
          }
          setDelayedVisible(false);
        }
      },
    ),
  );

  onCleanup(() => {
    if (delayTimeoutId !== undefined) {
      clearTimeout(delayTimeoutId);
    }
    if (delayedVisible()) {
      lastCloseTimestamp = Date.now();
    }
  });

  return (
    <Show when={delayedVisible()}>
      <div
        class={cn(
          TOOLTIP_BASE_CLASS,
          "bg-white",
          local.position === "left" || local.position === "right"
            ? "top-1/2 -translate-y-1/2"
            : "left-1/2 -translate-x-1/2",
          local.position === "top" && "bottom-full mb-2.5",
          local.position === "bottom" && "top-full mt-2.5",
          local.position === "left" && "right-full mr-2.5",
          local.position === "right" && "left-full ml-2.5",
          shouldAnimate() && "animate-tooltip-fade-in",
          local.class,
        )}
        style={{
          "z-index": `${Z_INDEX_OVERLAY}`,
          ...(typeof local.style === "object" ? local.style : {}),
        }}
        {...rest}
      >
        {local.children}
      </div>
    </Show>
  );
};
