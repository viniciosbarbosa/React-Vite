import useOnlineStatus from "../hooks/useOnlineStatus";

const Exemplo_2 = () => {
  const isOnline = useOnlineStatus();
  console.log(isOnline);

  return (
    <div>
      <p>Voce esta : {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default Exemplo_2;
