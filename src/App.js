import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage/welcomePage";
import GetUserComponent from "./components/GetUserComponent/GetUser";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return isLoggedIn ? (
    <div class="container">
      <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
    </div>
  ) : (
    <div>
      <GetUserComponent
        setUser={setUser}
        setIsloggedIn={setIsLoggedIn}
        user={user}
      />
    </div>
  );
}

export default App;
