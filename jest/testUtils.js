import React from "react"
import {render} from "react-native-testing-library"
import {Provider} from "react-redux"
import configureStore from "redux-mock-store"
import ThemeContextProvider from "../src/ContextUtils/ThemeContext"
import ConversionContextProvider from "../src/ContextUtils/ConversionContext"
import {initialState as themesState} from "../src/redux/reducers/themes"

const INITIAL_STATE = {
  themes: themesState,
}
const mockStore = configureStore([])
const store = mockStore(INITIAL_STATE)

const reduxRender = (ui, options) =>
  render(ui, {
    wrapper: ({children}) => (
      <Provider store={store}>
        <ThemeContextProvider>
          <ConversionContextProvider>{children}</ConversionContextProvider>
        </ThemeContextProvider>
      </Provider>
    ),
    ...options,
  })

// re-export everything for convenience
export * from "react-native-testing-library"

// override render method
export {reduxRender as render, store}
