"use client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import store from "./store";

const persistor = persistStore(store);

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={ store }>
      <PersistGate persistor={ persistor }>
        { children }
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
