import { Dispatch } from "redux";
import { connect } from "react-redux";
import App from "../components/App";
import { AppActionTypes } from "../types/index";
import { login } from "../actions/index";

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>) => ({
  clickHandler: () => dispatch(login())
})

const mapStateToProps = (state: number) => ({
  count: state,
  loggedIn: false,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
