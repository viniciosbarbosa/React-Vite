import { useEffect, useState } from "react";

const Timer = () => {
  //setInterval , setTimemout
  const [segundos, setSegundos] = useState(0);

  const simulando = () => {
    console.log("entrou");
  };

  useEffect(() => {
    simulando();

    const intervalId = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);

    // Limpeza de estado
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Segundos: {segundos}</p>
    </div>
  );
};

export default Timer;
