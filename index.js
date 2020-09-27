import "react-native-gesture-handler"
import React from "react"
import {Text, AppRegistry} from "react-native"
import {Provider} from "react-redux"
import persistStore from "redux-persist/lib/persistStore"
import {PersistGate} from "redux-persist/integration/react"

import configureStore from "./src/redux/configureStore"
import App from "./src/App"
import ThemeContextProvider from "./src/ContextUtils/ThemeContext"
import ConversionContextProvider from "./src/ContextUtils/ConversionContext"
import {name as appName} from "./app.json"

const initialState = {}
const store = configureStore(initialState)
const persistor = persistStore(store)

const Main = () => (
  <Provider store={store}>
    <PersistGate loading={<Text>loading...</Text>} persistor={persistor}>
      <ThemeContextProvider>
        <ConversionContextProvider>
          <App />
        </ConversionContextProvider>
      </ThemeContextProvider>
    </PersistGate>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Main)

// export {default} from "./storybook"
