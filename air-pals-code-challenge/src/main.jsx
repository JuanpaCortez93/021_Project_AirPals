// LIBRARIES USED
import React from "react";
import ReactDOM from "react-dom/client";

//IMPORT TAILWIND CSS STYLES
import './index.css';

// IMPORT CONTEXT
import { InputContextProvider } from "./Context/InputContext.jsx";

// IMPORT APP COMPONENT
import App from "./Components/App.jsx";

// ROOT ELEMENT CREATION
const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

// ROOT ELEMENT RENDER
root.render(
  <React.StrictMode>
    <InputContextProvider>
      <App></App>
    </InputContextProvider>
  </React.StrictMode>
);