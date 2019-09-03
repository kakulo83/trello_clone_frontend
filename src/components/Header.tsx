import * as React from "react";

type Props = {
  count: number;
  clickHandler: () => void
}

const Header: React.FC<Props> = props => (
  <div>
    <p>{props.count}</p>
    <input
      onClick={() => props.clickHandler()}
      type="button"
      value="Increment"
    />
  </div>
)

export default Header
