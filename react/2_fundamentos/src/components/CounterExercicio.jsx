import { useState } from "react";

export const CounterExercicio = () => {
  const counterUntil3 = () => {
    counter == 3 ? setCounter(0) : setCounter(counter + 1);
  };

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>{counter} vezes clicado</div>
      <br />
      <button onClick={counterUntil3}>clique aqui</button>
    </>
  );
};
