import React, {createContext} from "react"
import flow from "lodash/flow"

import connect from "./connect"

export const ThemeContext = createContext()

export const ThemeContextProvider = ({
  children,
  styleableTheme,
  changeTheme,
  defaultTheme,
}) => (
  <ThemeContext.Provider value={{styleableTheme, changeTheme, defaultTheme}}>
    {children}
  </ThemeContext.Provider>
)

export default flow([connect])(ThemeContextProvider)
