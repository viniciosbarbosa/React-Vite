import { useMemo } from "react";

const CalculoPesado = ({ numero }) => {
  const resultadoCalculoPesado = useMemo(() => {
    return operacaoPesada(numero);
  });

  return <div>Resulto:{resultadoCalculoPesado}</div>;
};

const operacaoPesada = (num) => {
  console.log("cal");
  return num * 1000;
};

export default CalculoPesado;
