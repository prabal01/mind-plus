import "./App.css";
import { useState, useEffect } from "react";
import { get, set } from "idb-keyval";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkIfLoggedIn = () => {
    get("isLoggedIn").then((data) => {
      if (data) setIsLoggedIn(true);
    });
  };

  //check if the user has already in login state when the app starts
  useEffect(() => {
    checkIfLoggedIn();
    if (isLoggedIn) console.log("user is logged in");
  }, []);
  console.log(isLoggedIn)
  return <div className="App">
    {isLoggedIn? <Router>
      <Switch>
        <Route exact path='/'>
          Hello World
        </Route>
      </Switch>
    </Router>:
    <WelcomePage/>}
  </div>;
}

export default App;
