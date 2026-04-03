import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { init } from "ui-grab";
import "./index.css";
import "./sample.css";
import { SamplePage } from "./sample-page.tsx";

declare global {
  interface Window {
    initUiGrab: typeof init;
  }
}

window.initUiGrab = init;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SamplePage />
  </StrictMode>,
);
