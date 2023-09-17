import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import "bootstrap/dist/css/bootstrap.css";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
