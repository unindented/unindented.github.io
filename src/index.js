import React from "react";
import { unstable_createRoot as createRoot } from "react-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import App from "./components/App";
import environment from "./relay/environment";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <RelayEnvironmentProvider environment={environment}>
    <App />
  </RelayEnvironmentProvider>
);

serviceWorker.unregister();
