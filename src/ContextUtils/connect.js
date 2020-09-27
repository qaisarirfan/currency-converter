import {connect} from "react-redux"

import {
  selectDefaultTheme,
  selectStyleableTheme,
  selectThemes,
} from "../redux/reducers/themes/selectors"
import {
  selectBaseCurrency,
  selectCurrencies,
  selectQuoteCurrency,
  selectRatesLoader,
} from "../redux/reducers/conversion/selectors"

import {createChangeThemeAction} from "../redux/reducers/themes/actionCreators"
import {
  changeBaseCurrency,
  changeQuoteCurrency,
  createLoadAction,
  swapCurrency,
  toggleFavorite,
} from "../redux/reducers/conversion/actionCreators"

const mapStateToProps = (state) => ({
  themes: selectThemes(state),
  defaultTheme: selectDefaultTheme(state),
  styleableTheme: selectStyleableTheme(state),

  baseCurrency: selectBaseCurrency(state),
  quoteCurrency: selectQuoteCurrency(state),
  rates: selectCurrencies(state),
  loader: selectRatesLoader(state),
})

const mapDispatchToProps = {
  changeTheme: createChangeThemeAction,

  getRates: createLoadAction,
  swapCurrency,
  changeBaseCurrency,
  changeQuoteCurrency,
  toggleFavorite,
}

export default connect(mapStateToProps, mapDispatchToProps)
