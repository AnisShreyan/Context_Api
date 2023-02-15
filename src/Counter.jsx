import React, { useContext } from "react";
import { AppContext } from "./Context/Counter";

function Counter() {
  const appState = useContext(AppContext);

  console.log(appState);

  const Inc = () => {
    appState.setCount(appState.count + 1);
  };

  const Dec = () => {
    appState.setCount(appState.count - 1);
  };

  return (
    <>
      <div>
        <button onClick={Inc}>Increament</button>
        <button onClick={Dec}>Decreament</button>
      </div>
    </>
  );
}

export default Counter;
