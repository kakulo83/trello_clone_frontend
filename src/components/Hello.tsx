import * as React from "react";
import Page from "../PageInterface";

interface Props {
  myProp: Page;
}

interface State {
  happyLevel: number;
}

export class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { happyLevel: 2 };
  }

  myFunction(): string {
    let derp = "big pooh";
    console.log(derp);
    return "derp"
  }

  render() {
    return (
      <div>
        <h1>Welcome to React with Typescript</h1>
        <p>Lux is your custom greeting {this.props.myProp.color}</p>
      </div>
    );
  }
}

