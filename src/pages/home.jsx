import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// 导入了两个 action 函数
import { increment, fetchHomeData } from "../store/modules/home";

const Home = function () {
  // const [counter, setCounter] = useState(200);
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
    dispatch(increment(2));
  }
  function getHomeData() {
    dispatch(fetchHomeData());
  }
  return (
    <div className="Home" style={{ border: "2px solid green", margin: "10px" }}>
      <h3>Home</h3>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>
      <button onClick={getHomeData}>getHomeData</button>
    </div>
  );
};

export default Home;
