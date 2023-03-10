import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <AppContext.Provider value={{ count, setCount }}>
      {props.children}
    </AppContext.Provider>
  );
};
