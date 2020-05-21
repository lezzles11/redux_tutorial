import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

const data = [
  {
    id: 0,
    title: "Agile",
    purpose: "to create an eLearning platform",
    language: "js",
    cool: "cool",
    reason: "soul",
    link: "/agile",
  },
  {
    id: 1,
    title: "Blockchain",
    purpose: "to create a blockchain banking system",
    language: "java",
    cool: "cool",
    reason: "work",
    link: "/blockchain",
  },
];

function filter(state = data, action) {
  let newState = [];
  switch (action.type) {
    case "WORK":
    case "SOUL":

    // filter for the cool
  }
}

function counter(state = { value: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(counter);
console.log(store.getState());
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());
store.dispatch({ type: "DECREMENT" });

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
