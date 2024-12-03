import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Providers from "./redux/Provider.tsx";
import AppProvider from "./store/AppProvder.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Providers>
    <AppProvider>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </AppProvider>
  </Providers>
  // </StrictMode>
);
