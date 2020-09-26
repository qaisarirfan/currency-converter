import React from "react"
import {View, Text, Image} from "react-native"
import PropTypes from "prop-types"
import styles from "./styles"

import logo from "../../assets/images/logo.png"

// Logo Component content
export const Logo = () => (
  <View style={styles.logoContainer}>
    <Image source={logo} style={styles.logo} resizeMode="contain" />
  </View>
)

// Logo Proptypes
Logo.propTypes = {}

// Logo Default props
Logo.defaultProps = {}

export default Logo
