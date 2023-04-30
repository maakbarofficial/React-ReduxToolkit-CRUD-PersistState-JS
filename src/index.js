import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persister = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persister}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
