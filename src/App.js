import React from "react";
import { render } from "react-dom";

import ControlledFrom from "./components/ControlledFrom";
import PassStateAsProp from "./components/PassStateAsProp";


const App = () => {
  return (
    <div>
      {/* <ControlledFrom /> */}
      <PassStateAsProp />
    </div>
  );
};

render(<App />, document.getElementById("root"));
