//Talvez chamar o usestate aqui
function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <>
      <div>
        <p>Hello! {user}</p>
        <button onClick={HandleLogout}>ENTRAR</button>
      </div>
    </>
  );
}

export default WelcomePage;
