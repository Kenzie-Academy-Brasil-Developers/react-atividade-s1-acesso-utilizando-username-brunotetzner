import { useState } from "react";
import "../WelcomePage/welcomePage.css";

function GetUserComponent({ setUser, setIsloggedIn, user }) {
  function HandleLogin() {
    setIsloggedIn(true);
  }

  return (
    <>
      <form class="container">
        <input
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        />
        <button onClick={() => HandleLogin(user)}>acessar com o nome</button>
      </form>
    </>
  );
}
export default GetUserComponent;
