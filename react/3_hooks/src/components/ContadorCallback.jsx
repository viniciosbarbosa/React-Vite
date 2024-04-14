import React, { useCallback } from "react";
const Botao = React.memo(({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
});

const ContadorCallback = () => {
  const handleClick = useCallback(() => {
    // Lógica de incremento do contador
  }, []);

  return (
    <div>
      <div>ContadorCallback</div>
      <Botao onClick={handleClick}>Clique Aqui</Botao>
    </div>
  );
};

export default ContadorCallback;
