import {connect} from "react-redux"

import {selectIsLoggedin} from "../redux/reducers/authentication/selectors"

const mapStateToProps = (state) => ({
  isLoggedin: selectIsLoggedin(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)
