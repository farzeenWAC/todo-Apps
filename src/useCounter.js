import React, { useState } from "react";

export function useCounter(initialValue=10) {
  const [count, setCount] = useState(initialValue);
  const addOne = (value) => {
    setCount((prevState) => {
      return prevState + value;
    });
  };
  const reduceOne = (value) => {
    setCount((prevState) => {
      return prevState - value;
    });
  };
  const resetHandler = () => {
    setCount(0);
  };
  return { count, addOne, reduceOne, resetHandler };
}
