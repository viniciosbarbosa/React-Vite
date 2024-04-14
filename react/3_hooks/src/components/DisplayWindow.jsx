import useWindowSize from "../hooks/useWindowSize";

const DisplayWindow = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Largura janela é {width}</p>
      <p>Altura janela é {height}</p>
    </div>
  );
};

export default DisplayWindow;
