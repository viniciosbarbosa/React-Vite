import "./App.css";

import Welcome from "./components/Welcome";

import GoodMorning from "./components/GoodMorning";
import Father from "./components/Father";
import Descricao from "./components/Descricao";
import Cachorro from "./components/Cachorro";
import Counter from "./components/Counter";
import UserInfoForm from "./components/UserInfoForm";
import Button from "./components/Button";
import PaiFunction from "./components/PaiFunction";
import Form from "./components/Form";
import RenderCondicional from "./components/RenderCondicional";
import LoginButton from "./components/LoginButton";
import Warning from "./components/Warning";
import NumberList from "./components/NumberList";
import ButtonStyled from "./components/ButtonStyled";
import ButtonBlue from "./components/buttonblue";
import Greeting from "./components/Greeting";
import { CounterExercicio } from "./components/CounterExercicio";
import TaskList from "./components/TaskList";

function App() {
  const datas = [
    { id: 1, text: "lorem 1" },
    { id: 2, text: "lorem 2" },
    { id: 3, text: "lorem 3" },
  ];

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

      {/*6.7 - multiplos estados */}
      <UserInfoForm />

      {/*6.8 - Eventos */}
      <Button />

      {/*6.9 - Passando funçoes de manipulacoes com props */}
      <PaiFunction />

      {/*6.10 - Eventos de form */}
      <Form />

      {/*6.11 - Renderizacao Condicional */}
      <RenderCondicional user="vini" />

      {/*6.12 - Expressao ternario */}
      <LoginButton loggedIn={true} />

      {/*6.13 - Render nulo */}
      <Warning warning={true} />

      {/*6.14 - Listas e chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]} />

      {/*6.15 - Estilos */}
      <ButtonStyled />

      {/*6.16 - Estilos Globais*/}
      <ButtonBlue />

      {/*6.17 - Exercicios*/}
      <Greeting name={"Joao"} />
      <CounterExercicio />
      <TaskList />
    </>
  );
}

export default App;
