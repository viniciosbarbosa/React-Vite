import { useReducer } from "react";

//Definindo estado inicial

const estadoInicial = { contador: 0 };

//funcao reducer que define com acoes att estados

function reducer(estado, acao) {
  switch (acao.tipo) {
    case "Incrementar":
      return { contador: estado.contador + 1 };
    case "Decrementar":
      return { contador: estado.contador - 1 };
    case "Resetar":
      return { contador: 0 };
    default:
      console.log("erro");
  }
}

const Contador = () => {
  //iniciar usereducer com estado inicial e funcao que modifica
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <p>Contador : {estado.contador}</p>
      <button onClick={() => dispatch({ tipo: "Incrementar" })}>
        Incrementar
      </button>

      <button onClick={() => dispatch({ tipo: "Decrementar" })}>
        Decrementar
      </button>

      <button onClick={() => dispatch({ tipo: "Resetar" })}>Resetar</button>
    </div>
  );
};

export default Contador;
