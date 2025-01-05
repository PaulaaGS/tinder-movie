import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import packageJson from "../package.json";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  return worker.start({
    serviceWorker: {
      url: `${packageJson.homepage}/mockServiceWorker.js`,
    },
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
