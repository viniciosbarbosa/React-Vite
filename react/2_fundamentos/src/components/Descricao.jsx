const Descricao = (props) => {
  //props = {}
  //propriedades => chaves dos valors
  //ex props.nome = "Vini"

  return (
    <div>
      <p>
        Meu nome é : {props.nome} , {props.sobrenome} , e tenho {props.idade},
        de idade
      </p>
    </div>
  );
};

export default Descricao;
