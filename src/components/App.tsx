import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const AppContainer = styled.div`
  height: 100%;
  background-color: rgb(0, 121, 191);
`;

const ContentContainer = styled.div`
  border: solid 1px; red;
  background-color: pink;
  margin: 12px;
`;

type Props = {
  count: number;
  clickHandler: () => void
}

const App: React.FC<Props> = props => (
  <AppContainer>
    <Header/>
    <ContentContainer>
      <p>{props.count}</p>
      <input
        onClick={() => props.clickHandler()}
        type="button"
        value="Increment"
      />
    </ContentContainer>
    <Footer />
  </AppContainer>
)

export default App
