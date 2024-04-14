import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContexto";
MeuContexto;

const ValorContexto = () => {
  const { mensagem } = useContext(MeuContexto);

  return <div>Valor do contexto é {mensagem}</div>;
};

export default ValorContexto;
