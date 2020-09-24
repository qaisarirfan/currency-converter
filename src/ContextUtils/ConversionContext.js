import React, {createContext} from "react"
import flow from "lodash/flow"

import connect from "./connect"

export const ConversionContext = createContext()

export const ConversionContextProvider = ({
  children,
  baseCurrency,
  quoteCurrency,
  getRates,
  swapCurrency,
  rates,
  changeBaseCurrency,
  changeQuoteCurrency,
}) => {
  const contextValue = {
    baseCurrency,
    quoteCurrency,
    getRates,
    swapCurrency,
    rates,
    changeBaseCurrency,
    changeQuoteCurrency,
  }
  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  )
}

export default flow([connect])(ConversionContextProvider)
