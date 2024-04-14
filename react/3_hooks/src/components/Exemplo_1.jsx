import { useEffect, useState } from "react";

const Exemplo_1 = ({ user_Id }) => {
  const [userDatas, setUsersDatas] = useState(null);

  useEffect(() => {
    const findUser = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user_Id}`
      );

      const userDatas = await response.json();

      setUsersDatas(userDatas);

      document.title = `Olá ${userDatas.name}`;
    };

    if (user_Id) {
      findUser();
    }
  }, [user_Id]);

  return (
    <>
      {userDatas ? (
        <div>
          <p>{userDatas.name}</p>
          <p>{userDatas.email}</p>
        </div>
      ) : (
        <p>sem dados</p>
      )}
    </>
  );
};

export default Exemplo_1;
