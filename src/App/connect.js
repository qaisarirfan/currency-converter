import {connect} from "react-redux"

import {selectIsLoggedin} from "../redux/reducers/authentication/selectors"

import {selectNavigation} from "../redux/reducers/navigation/selectors"
import {createNavigationAction} from "../redux/reducers/navigation/actionCreators"

const mapStateToProps = (state) => ({
  isLoggedin: selectIsLoggedin(state),
  currentNavigation: selectNavigation(state),
})

const mapDispatchToProps = {
  setNavigation: createNavigationAction,
}

export default connect(mapStateToProps, mapDispatchToProps)
