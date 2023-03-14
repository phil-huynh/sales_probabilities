import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import ContextProvider from "./components/Context.js";
import App from "./components/App.jsx";



const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
