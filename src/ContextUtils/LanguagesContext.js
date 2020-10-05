import React, {createContext} from "react"
import flow from "lodash/flow"

import connect from "./connect"

export const LanguageContext = createContext()

export const LanguageContextProvider = ({
  children,
  currentLang,
  setLanguage,
}) => (
  <LanguageContext.Provider value={{currentLang, setLanguage}}>
    {children}
  </LanguageContext.Provider>
)

export default flow([connect])(LanguageContextProvider)
