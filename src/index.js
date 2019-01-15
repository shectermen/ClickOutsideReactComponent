import React from "react";
import { render } from "react-dom";
import OutsideAlerter from "./OutsideAlerter";

const App = () => (
  <OutsideAlerter>
    <button>Click outside me!</button>
  </OutsideAlerter>
);

render(<App />, document.getElementById("root"));
