const LoginButton = ({ loggedIn }) => {
  //entrar -> deslogado
  //sair -> logado

  return (
    <div>{loggedIn ? <button>Sair</button> : <button>entrar</button>}</div>
  );
};

export default LoginButton;
