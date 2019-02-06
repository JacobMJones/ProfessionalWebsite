import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App/index.js";
import * as serviceWorker from "./serviceWorker";
import Data, { DataContext } from "./Components/Data/";

ReactDOM.render(
  <DataContext.Provider value={new Data()}>
    <App />
  </DataContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
