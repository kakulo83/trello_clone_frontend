import * as React from "react";

type Props = {
  count: number;
}

const Header: React.FC<Props> = count => (
  <div>
    <p>{count.count}</p>
  </div>
)

export default Header
