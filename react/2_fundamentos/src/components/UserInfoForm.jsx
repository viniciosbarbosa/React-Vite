import { useState } from "react";

const UserInfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
  };
  return (
    <form onSubmit={handleSubmit}>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite seu nome"
      />
      <input
        type="e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
      />
      <br />
      {name}
      <br />
      {email}
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default UserInfoForm;
