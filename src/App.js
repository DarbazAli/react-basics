import React from "react";
import { render } from "react-dom";

import ControlledFrom from "./components/ControlledFrom";
import PassStateAsProp from "./components/PassStateAsProp";
import CallbackAsProp from "./components/CallbackAsProp";


const App = () => {
  return (
    <div>
      {/* <ControlledFrom /> */}
      {/* <PassStateAsProp /> */}
      <CallbackAsProp />
    </div>
  );
};

render(<App />, document.getElementById("root"));
