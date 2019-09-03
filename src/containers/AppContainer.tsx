// import * as React from "react";
// import { App } from "../components/App";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import Header from "../components/Header";
import { AppActionTypes } from "../types/index";
import { increment } from "../actions/index";

// import Page from "../PageInterface";
// let myThing: Page = { color: "Blue" };
// <App myProp={myThing} />

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>) => ({
  clickHandler: () => dispatch(increment())
})

const mapStateToProps = (state: number) => ({
  count: state
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
