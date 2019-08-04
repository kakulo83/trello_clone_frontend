import * as React from "react";
import PageInterface from "../PageInterface";
//export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<PageInterface, {}> {
  render() {
    return (
      <div>
        <h1>Welcome to React with Typescript</h1>
        <p>The color of the page is {this.props.color}</p>
      </div>
    );
  }
}
