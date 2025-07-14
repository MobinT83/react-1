import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {
      <div className="text-red-500">hello world</div>
      /* <App /> */
    }
  </StrictMode>
);
