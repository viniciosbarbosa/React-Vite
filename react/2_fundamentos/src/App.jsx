import "./App.css";

import Welcome from "./components/Welcome";

import GoodMorning from "./components/GoodMorning";
import Father from "./components/Father";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      {/*6.1 - Criacao de componentes */}
      <Welcome />

      {/*6.2 - Expressoes JSX */}
      <GoodMorning />

      {/*6.3 - Componente dentro de componete */}
      <Father />

      {/*6.4 - Propos */}
      <Descricao nome="vinicius" sobrenome="barbosa" idade={23} />

      {/*6.5 - Destruturando Propos */}
      <Cachorro nome="Edge" raca="golden" />

      {/*6.6 - useState -> hook */}
      <Counter />
    </>
  );
}

export default App;
