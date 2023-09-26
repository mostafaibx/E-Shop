import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import pers from "./Store/configureStore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYRpOMlTh3lGusV4spe7oFUyUXqzwvY0w",
  authDomain: "e-shop-583c7.firebaseapp.com",
  projectId: "e-shop-583c7",
  storageBucket: "e-shop-583c7.appspot.com",
  messagingSenderId: "538144957529",
  appId: "1:538144957529:web:55942dd2075a4b3deffd48",
};
initializeApp(firebaseConfig);

const { persistor, store } = pers();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
