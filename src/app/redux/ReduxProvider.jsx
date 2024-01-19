'use client';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import persistStore from "redux-persist/es/persistStore";

const persistor = persistStore()
