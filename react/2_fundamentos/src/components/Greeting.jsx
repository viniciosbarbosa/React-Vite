const Greeting = ({ name }) => {
  return <div>{name && <h1>Bem vindo ! {name}</h1>}</div>;
};

export default Greeting;
