import { useState } from "react";

const Form = () => {
  const [value, setValeu] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado", value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValeu(e.target.value)}
        placeholder="Preencha o campo"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
