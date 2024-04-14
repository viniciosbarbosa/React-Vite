import { useState } from "react";
import { useEffect } from "react";

const ExemploUseEffect = () => {
  //executar algo baseado em algo
  //mudanca valor ou carregamento da pagina

  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `voce clicou ${contador} vezes`;
  });

  return (
    <>
      <p>voce clicou {contador} vezes</p>

      <button onClick={() => setContador(contador + 1)}>click aqui</button>
    </>
  );
};

export default ExemploUseEffect;
