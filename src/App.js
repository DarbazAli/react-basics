import React from "react";
import { render } from "react-dom";
import StatelessComp from "./components/StatelessComp";
import ReactComp from "./components/ReactComp";
import CampSite from "./components/CompReview";
import StatefulComp from "./components/StatefulComp";


const App = () => {
  return (
    <div>
      {/* Simple JSX ELEMENT */}
      <h1>Hello JSX!</h1>

      {/* more complext JSX element */}
      {/* JSX should return one single element */}
      <div>
        <h3>New Element</h3>
        <h3>Another JSX element</h3>
      </div>

      {/* Put the compontent inside here */}
      <StatelessComp />
      <ReactComp />
      <CampSite />
      <StatefulComp />
    </div>
  );
};

render(<App />, document.getElementById("root"));
