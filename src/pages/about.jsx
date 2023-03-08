import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/modules/home";

const About = function () {
  // const [counter, setCounter] = useState(300);
  // 1.从redux的store中读取数据
  const { counter } = useSelector((rootState) => {
    return {
      counter: rootState.home.counter,
    };
  });
  // 2.触发action
  const dispatch = useDispatch();
  function addCounter() {
    // setCounter(counter + 1);
    dispatch(increment(4));
  }
  return (
    <div className="About" style={{ border: "2px solid blue", margin: "20px" }}>
      <h3>About</h3>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>
    </div>
  );
};

export default About;
