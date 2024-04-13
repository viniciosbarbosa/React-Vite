const RenderCondicional = ({ user }) => {
  //se houver user exibida boas vindas message !
  return <div>{user && <h1>Bem vindo {user}</h1>}</div>;
};

export default RenderCondicional;
