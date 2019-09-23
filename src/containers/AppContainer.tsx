import { Dispatch } from "redux";
import { connect } from "react-redux";
import App from "../components/App";
import { SystemActionTypes, SystemState } from "../types/system/types";
import { login } from "../actions/system/actions";

const mapDispatchToProps = (dispatch: Dispatch<SystemActionTypes>) => ({
  clickHandler: () => dispatch(login({ email: "admin1@test.net", password: "password" }))
})

const mapStateToProps = (state: SystemState) => ({
  loggedIn: state.loggedIn,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
