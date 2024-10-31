import { createContext, useContext, useState } from "react";

// 1- Create Context
const CounterContext = createContext();

// 2- Create Parent Componunt
export default function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increaseValue = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseValue = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <CounterContext.Provider value={{ count, decreaseValue, increaseValue }}>
      <div className="flex gap-2 items-center bg-gray-300 w-[300px] m-8">
        {children}
      </div>
    </CounterContext.Provider>
  );
}

// 3- Create Child Componunt
function Count() {
  const { count } = useContext(CounterContext);
  return (
    <>
      <div> {count}</div>
    </>
  );
}
function Label({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
function Increase({ icon }) {
  const { increaseValue } = useContext(CounterContext);

  return (
    <>
      <button
        className="border-1 p-1 bg-blue-500 w-[50px] rounded-md"
        onClick={increaseValue}
      >
        {icon}
      </button>
    </>
  );
}
function Descrease({ icon }) {
  const { decreaseValue } = useContext(CounterContext);

  return (
    <>
      <button
        className="border-1 p-1 bg-blue-500 w-[50px] rounded-md"
        onClick={decreaseValue}
      >
        {icon}
      </button>
    </>
  );
}

// 4- /add Child To Parent
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Descrease = Descrease;
