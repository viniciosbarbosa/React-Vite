import { useState } from "react";

const Counter = () => {
  //[consultar , alterar]
  const [count, setCounter] = useState(0);

  return <div>{count}</div>;
};

export default Counter;
