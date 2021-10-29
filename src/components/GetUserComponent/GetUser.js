import { useState } from "react";
function GetUserComponent({ setUser, setIsloggedIn, user }) {
  function HandleLogin() {
    setIsloggedIn(true);
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <button onClick={() => HandleLogin(user)}>acessar com o nome</button>
      </div>
    </>
  );
}
export default GetUserComponent;
