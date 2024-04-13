const Button = () => {
  const handleClick = () => {
    console.log("click!");
  };

  return <button onClick={handleClick}>Click here</button>;
};

export default Button;
