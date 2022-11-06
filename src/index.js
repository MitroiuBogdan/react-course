import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

function App() {
  let message = "Bye there!";

  if (Math.random() > 0.5) {
    message = "Hello there!";
  } else {
    message = "The number is lower than 0.5";
  }

  return <h1>{message}</h1>;
}

function PrintTimeComponent() {
  const date = new Date();
  const time = date.toLocaleTimeString();

  return <h1>{time}</h1>;
}

function InputComponent() {
  return <input type={"number"} />;
}

root.render(<PrintTimeComponent />);
root.render(<InputComponent />);
