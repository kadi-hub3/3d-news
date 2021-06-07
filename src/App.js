import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Health from "./pages/Health";
import General from "./pages/General";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Science from "./pages/Science";
import Tech from "./pages/Tech";
import ET from "./pages/ET";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/science" component={Science} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/et" component={ET} />
        <Route exact path="/business" component={Business} />
        <Route exact path="/general" component={General} />
      </Switch>
    </>
  );
}
export default App;
