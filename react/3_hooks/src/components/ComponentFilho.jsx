import { useContext } from "react";
import { MeuContexto } from "../contexts/MeuContexto";
MeuContexto;

const ComponentFilho = () => {
  const { mensagem, setMensagem } = useContext(MeuContexto);

  return (
    <div>
      <button onClick={() => setMensagem("nova msg")}>Alterar Msg</button>
    </div>
  );
};

export default ComponentFilho;
