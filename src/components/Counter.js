import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    // setCount(count + 1);

    // update state based on previous state
    // setCount is async/takes some time
    // it executes function first before updating state

    setCount((prevState) => {
      return prevState + 1;
    });
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;

// TODO: rules when using hooks:
// !dont call hooks inside loops, conditions or nested functions/only at the top level
// !don't call hooks from regular js functions/only call hooks from React Fuunctions/Components

// !! use component state as sparingly as possible to avoid losing track
