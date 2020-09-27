import {Provider} from "react-redux"
import React from "react"
import ThemeContextProvider from "../src/ContextUtils/ThemeContext"
import configureStore from "../src/redux/configureStore"

const initialState = {}
const store = configureStore(initialState)

export const StoryWrapper = ({children}) => (
  <Provider store={store}>
    <ThemeContextProvider>{children}</ThemeContextProvider>
  </Provider>
)
