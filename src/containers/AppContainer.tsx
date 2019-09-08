import { Dispatch } from "redux";
import { connect } from "react-redux";
import App from "../components/App";
import { AppActionTypes } from "../types/index";
import { increment } from "../actions/index";

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>) => ({
  clickHandler: () => dispatch(increment())
})

const mapStateToProps = (state: number) => ({
  count: state
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
