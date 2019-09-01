import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
import Page from "./PageInterface";

let myThing: Page = { color: "Blue" };

ReactDOM.render(
  <Hello myProp={myThing} />,
  document.getElementById("example")
);
