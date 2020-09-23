import {connect} from "react-redux"

import {
  selectDefaultTheme,
  selectStyleableTheme,
  selectThemes,
} from "../redux/reducers/themes/selectors"
import {createChangeThemeAction} from "../redux/reducers/themes/actionCreators"

const mapStateToProps = (state) => ({
  themes: selectThemes(state),
  defaultTheme: selectDefaultTheme(state),
  styleableTheme: selectStyleableTheme(state),
})

const mapDispatchToProps = {
  changeTheme: createChangeThemeAction,
}

export default connect(mapStateToProps, mapDispatchToProps)
