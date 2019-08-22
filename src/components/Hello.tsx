import * as React from "react";
//import PageInterface from "../PageInterface";

interface Props {
  greeting: string;
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
      <p>Here is your custom greeting {this.props.greeting}</p>
      </div>
    );
  }
}

