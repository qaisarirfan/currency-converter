import {connect} from "react-redux"
import {login} from "../../redux/reducers/authentication/actionCreators"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  login,
}

export default connect(mapStateToProps, mapDispatchToProps)
