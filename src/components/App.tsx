import * as React from "react";
import Header from "./Header";

type Props = {
  count: number;
  clickHandler: () => void
}

const App: React.FC<Props> = props => (
  <div>
    <Header/>
    <p>{props.count}</p>
    <input
      onClick={() => props.clickHandler()}
      type="button"
      value="Increment"
    />
  </div>
)

export default App
