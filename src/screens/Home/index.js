import React, {useContext, useEffect, useState} from "react"
import flow from "lodash/flow"
import {View, TouchableOpacity, Image, Text} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import PropTypes from "prop-types"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {useNavigation} from "@react-navigation/native"

import {KeyboardSpacer} from "../../components/KeyboardSpacer"
import {ConversionInput} from "../../components/ConversionInput"
import {ReverseButton} from "../../components/ReverseButton"
import themeStyles from "./styles"
import connect from "./connect"
import HeaderBar from "../../components/HeaderBar"
import {ThemeContext} from "../../ContextUtils/ThemeContext"

// Home Component content
export const Home = ({getRates}) => {
  const {push} = useNavigation()
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)

  useEffect(() => {
    getRates()
  }, [])

  return (
    <View style={styles.root} testID="welcome">
      <HeaderBar
        title="Home"
        isHeaderShow={false}
        rightContent={
          <TouchableOpacity
            testID="options_screen_button"
            onPress={() => push("Options")}>
            <Entypo name="cog" size={32} color="#fff" />
          </TouchableOpacity>
        }
      />
      <KeyboardAwareScrollView testID="home_screen" scrollEnabled={true} behavior="padding">
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              keyboardType="numeric"
              testID="conversion_input_1"
            />
            <ConversionInput editable={false} testID="conversion_input_2" />
            <ReverseButton text="Reverse Currencies" onPress={() => {}} />
          </View>
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

// Home Proptypes
Home.propTypes = {
  getRates: PropTypes.func.isRequired,
}

// Home Default props
Home.defaultProps = {}

export default flow([connect])(Home)
