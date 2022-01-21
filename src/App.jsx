import React from "react";
import "./styles.css";
import Counter from "./Counter";
import AutoCounter from "./AutoCounter";
import ManualCounter from "./ManualCounter";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <AutoCounter />
      <hr />
      <ManualCounter />
    </div>
  );
}
