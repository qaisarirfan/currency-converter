import {connect} from "react-redux"

import {
  selectDefaultTheme,
  selectStyleableTheme,
  selectThemes,
} from "../redux/reducers/themes/selectors"
import {
  selectBaseCurrency,
  selectQuoteCurrency,
  selectRatesData,
} from "../redux/reducers/conversion/selectors"

import {createChangeThemeAction} from "../redux/reducers/themes/actionCreators"
import {
  changeBaseCurrency,
  changeQuoteCurrency,
  createLoadAction,
  swapCurrency,
} from "../redux/reducers/conversion/actionCreators"

const mapStateToProps = (state) => ({
  themes: selectThemes(state),
  defaultTheme: selectDefaultTheme(state),
  styleableTheme: selectStyleableTheme(state),

  baseCurrency: selectBaseCurrency(state),
  quoteCurrency: selectQuoteCurrency(state),
  rates: selectRatesData(state),
})

const mapDispatchToProps = {
  changeTheme: createChangeThemeAction,

  getRates: createLoadAction,
  swapCurrency,
  changeBaseCurrency,
  changeQuoteCurrency,
}

export default connect(mapStateToProps, mapDispatchToProps)
