import React, {useContext, useEffect} from "react"
import SplashScreen from "react-native-splash-screen"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import flow from "lodash/flow"
import PropTypes from "prop-types"

import Login from "../screens/Login"
import Home from "../screens/Home"
import Options from "../screens/Options"
import Themes from "../screens/Themes"
import CurrencyList from "../screens/CurrencyList"
import {ThemeContext} from "../ContextUtils/ThemeContext"
import connect from "./connect"

const OptionsStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Options" component={Options} />
      <Stack.Screen name="Themes" component={Themes} />
      <Stack.Screen
        name="CurrencyList"
        component={CurrencyList}
        options={{
          title: "Currency List",
        }}
      />
    </Stack.Navigator>
  )
}

const App = ({isLoggedin}) => {
  const {defaultTheme, changeTheme} = useContext(ThemeContext)

  useEffect(() => {
    SplashScreen.hide()
    if (defaultTheme) {
      changeTheme(defaultTheme)
    }
  }, [defaultTheme])

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
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
