import "./App.css";
import { useState, useEffect } from "react";
import { get } from "idb-keyval";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Homepage from "./components/Homepage/Homepage";

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
  }, [isLoggedIn]);
  console.log("is user logged in: ",isLoggedIn)
  return <div className="App">
    {isLoggedIn ? <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </Router>:
    <WelcomePage/>}
  </div>;
}

export default App;
