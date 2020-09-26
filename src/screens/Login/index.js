import React, {useContext} from "react"
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import PropTypes from "prop-types"
import {useRoute} from "@react-navigation/native"
import Color from "color"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {HeaderBar} from "../../components/HeaderBar"
import {ThemeContext} from "../../ContextUtils/ThemeContext"
import themeStyles from "./styles"
import {Logo} from "../../components/Logo"

// Login Component content
export const Login = () => {
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  const {name} = useRoute()

  return (
    <View style={styles.root}>
      <HeaderBar isHeaderShow={false} title={name} />
      <KeyboardAwareScrollView
        scrollEnabled
        behavior="padding"
        style={styles.container}
        contentContainerStyle={styles.container}>
        <View style={styles.content}>
          <Logo />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Color(styleableTheme.A700).darken(0.6).hex()}
            autoCapitalize="none"
            autoCompleteType="email"
            autoFocus
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Color(styleableTheme.A700).darken(0.6).hex()}
            autoCapitalize="none"
            secureTextEntry
          />
          <TouchableOpacity style={styles.submitButton} onPress={() => {}}>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}
// Login Proptypes
Login.propTypes = {}

// Login Default props
Login.defaultProps = {}

export default Login
