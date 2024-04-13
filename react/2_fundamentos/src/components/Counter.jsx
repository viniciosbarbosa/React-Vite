import { useState } from "react";

const Counter = () => {
  //[consultar , alterar]
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Mais um </button>
    </div>
  );
};

export default Counter;
