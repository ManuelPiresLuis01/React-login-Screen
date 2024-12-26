import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const rota = document.getElementById("root");

createRoot(rota).render(
    <StrictMode>
        <App />
    </StrictMode>,
)