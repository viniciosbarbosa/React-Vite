import FilhoFunction from "./FilhoFunction";

const PaiFunction = () => {
  const handleChildClick = () => {
    console.log("clicou no btn elemento filho");
  };

  return (
    <div>
      <FilhoFunction onChildClick={handleChildClick} />
    </div>
  );
};

export default PaiFunction;
