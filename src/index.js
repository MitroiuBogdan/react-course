import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

function App() {
  return <h1>Hello react</h1>;
}

root.render(<App />);
