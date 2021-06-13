import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import HomeFR from "./pages/HomeFR/HomeFR";
import HomeES from "./pages/HomeES/HomeES";
import HomeAR from "./pages/HomeAR/HomeAR";
import Health from "./pages/Health";
import General from "./pages/General";
import Business from "./pages/Business";
import Sports from "./pages/Sports";
import Science from "./pages/Science";
import Tech from "./pages/Tech";
import ET from "./pages/ET";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { fetchYahoo } from "./api";

function App() {
  return (
    <>
      <Header />
      <Newsletter />
      <Switch>
        <Route exact path="/3d-news/" component={Home} />
        <Route exact path="/3d-news/france" component={HomeFR} />
        <Route exact path="/3d-news/spain" component={HomeES} />
        <Route exact path="/3d-news/ae" component={HomeAR} />
        <Route exact path="/3d-news/health" component={Health} />
        <Route exact path="/3d-news/tech" component={Tech} />
        <Route exact path="/3d-news/science" component={Science} />
        <Route exact path="/3d-news/sports" component={Sports} />
        <Route exact path="/3d-news/et" component={ET} />
        <Route exact path="/3d-news/business" component={Business} />
        <Route exact path="/3d-news/general" component={General} />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
