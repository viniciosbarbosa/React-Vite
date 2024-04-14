import "./App.css";
import ComponentFilho from "./components/ComponentFilho";
import Contador from "./components/Contador";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Timer from "./components/Timer";
import ValorContexto from "./components/ValorContexto";
import { MeuContextoProvider } from "./contexts/MeuContexto";
MeuContextoProvider;

function App() {
  return (
    <>
      {/* 8.1 Use Effect */}
      <ExemploUseEffect />
      <Timer />

      {/* 8.2 Context Api - transferencia de estado entre componentes */}
      <MeuContextoProvider>
        <ComponentFilho />
        <ValorContexto />
      </MeuContextoProvider>

      {/*8.3 - useReducer  */}
      <Contador />
    </>
  );
}

export default App;
