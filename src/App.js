import React from "react";
import Form from "./Form";
import "./App.css";
import EXCHANGE_RATES from "./ExpenseRates";

const App = () => {
  return (
    <div className="app">
      <EXCHANGE_RATES />
    </div>
  );
};

export default App;
