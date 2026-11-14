//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import App from "./App.tsx";
import { ContrastProvider } from "./hooks/useContrast.tsx";
/*
<StrictMode>
  </StrictMode>,*/
createRoot(document.getElementById("root")!).render(
  <ContrastProvider>
    <App />
  </ContrastProvider>,
);
