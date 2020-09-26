import {connect} from "react-redux"

import {selectThemes} from "../../redux/reducers/themes/selectors"

const mapStateToProps = (state) => ({
  themes: selectThemes(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)
