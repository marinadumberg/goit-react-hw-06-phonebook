import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistore}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
