import React, {useContext, useEffect} from "react"
import RNBootSplash from "react-native-bootsplash"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import flow from "lodash/flow"
import PropTypes from "prop-types"
import {useTranslation} from "react-i18next"
import i18next from "i18next"
import {I18nManager} from "react-native"

import Login from "../screens/Login"
import Home from "../screens/Home"
import Options from "../screens/Options"
import Themes from "../screens/Themes"
import Languages from "../screens/Languages"
import CurrencyList from "../screens/CurrencyList"
import {ThemeContext} from "../ContextUtils/ThemeContext"
import {LanguageContext} from "../ContextUtils/LanguagesContext"
import connect from "./connect"
import constants from "../constants"

const OptionsStack = () => {
  const Stack = createStackNavigator()
  const {t} = useTranslation()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="Themes" component={Themes} />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={{
          title: t("common.currency_list"),
        }}
      />
      <Stack.Screen name="Languages" component={Languages} />
    </Stack.Navigator>
  )
}

const App = ({isLoggedin, setNavigation, currentNavigation}) => {
  const {defaultTheme, changeTheme} = useContext(ThemeContext)
  const {currentLang} = useContext(LanguageContext)

  const {allowedLanguages} = constants

  const {code, rtl} = allowedLanguages[currentLang]

  useEffect(() => {
    RNBootSplash.hide({duration: 250})

    i18next.changeLanguage(code)
    if (!rtl) {
      I18nManager.forceRTL(false)
    }

    if (defaultTheme) {
      changeTheme(defaultTheme)
    }
  }, [defaultTheme])

  const Stack = createStackNavigator()

  return (
    <NavigationContainer
      initialState={currentNavigation}
      onStateChange={setNavigation}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedin ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Options" component={OptionsStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// App Proptypes
App.propTypes = {
  isLoggedin: PropTypes.bool,
}

// App Default props
App.defaultProps = {
  isLoggedin: false,
}

export default flow([connect])(App)
