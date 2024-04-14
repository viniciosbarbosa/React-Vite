import "./App.css";
import CalculoPesado from "./components/CalculoPesado";
import ComponentFilho from "./components/ComponentFilho";
import Contador from "./components/Contador";
import Container from "./components/Container";
import DisplayWindow from "./components/DisplayWindow";
import ExemploUseEffect from "./components/ExemploUseEffect";
import Exercicios from "./components/Exercicios";
import PerfilDeUsuario from "./components/PerfilDeUsuario";
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
      {/*8.4 - Custom Hooks */}
      <DisplayWindow />
      {/**8.5 - Slots e children props */}
      <Container>
        <h1>Titulo</h1>
        <p>sub titulo</p>
        <Contador />
      </Container>

      {/*8.6 - sincronizar o estado com props */}
      <PerfilDeUsuario usuarioId={1} />

      {/*8.7 - useMemo e useCallback */}
      <CalculoPesado numero={5} />

      {/*Exercicios */}
      <Exercicios />
    </>
  );
}

export default App;
