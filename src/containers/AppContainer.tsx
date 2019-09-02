import * as React from "react";
import { App } from "../components/App";
import Page from "../PageInterface";

let myThing: Page = { color: "Blue" };

const AppContainer = () => (
  <div>
    <App myProp={myThing} />
  </div>
)

export default AppContainer
