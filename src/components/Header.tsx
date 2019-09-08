import * as React from "react";
import styled from "styled-components";

const CenteredTitle = styled.div`
  text-align: center;
`;

const HeaderContainer = styled.div`
  border: solid 1px blue;
  background-color: lightblue;
  margin: 0 0 0 12px;
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <CenteredTitle>Hello World</CenteredTitle>
  </HeaderContainer>
)

export default Header
