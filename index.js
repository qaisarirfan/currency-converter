import "react-native-gesture-handler"
import React from "react"
import {Text, AppRegistry} from "react-native"
import {Provider} from "react-redux"
import persistStore from "redux-persist/lib/persistStore"
import {PersistGate} from "redux-persist/integration/react"
import {I18nextProvider} from "react-i18next"

import configureStore from "./src/redux/configureStore"
import App from "./src/App"
import ThemeContextProvider from "./src/ContextUtils/ThemeContext"
import ConversionContextProvider from "./src/ContextUtils/ConversionContext"
import LanguagesContextProvider from "./src/ContextUtils/LanguagesContext"
import configureI18next from "./src/services/i18n"
import {name as appName} from "./app.json"

const initialState = {}
const store = configureStore(initialState)
const persistor = persistStore(store)

const i18n = configureI18next()

const Main = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>loading...</Text>} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <LanguagesContextProvider>
          <ThemeContextProvider>
            <ConversionContextProvider>
              <App />
            </ConversionContextProvider>
          </ThemeContextProvider>
        </LanguagesContextProvider>
      </I18nextProvider>
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Main)

// export {default} from "./storybook"
