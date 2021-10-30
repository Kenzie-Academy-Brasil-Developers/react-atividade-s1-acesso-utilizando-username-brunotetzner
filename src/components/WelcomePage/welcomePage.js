import "./welcomePage.css";
function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <>
      <div class="container">
        <p>Hello! {user}</p>
        <button onClick={HandleLogout}>ENTRAR</button>
      </div>
    </>
  );
}

export default WelcomePage;
