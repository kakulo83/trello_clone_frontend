import * as React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  border: solid 1px black;
  background-color: lightgray;
  margin: 12px;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    Footer
  </FooterContainer>
)

export default Footer
