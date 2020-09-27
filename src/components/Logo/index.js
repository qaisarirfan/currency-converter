import React from "react"
import {Image} from "react-native"
import PropTypes from "prop-types"
import styled from "styled-components/native"
import styles from "./styles"

import logo from "../../assets/images/logo.png"

const StyledView = styled.View`
  ${{...styles.logoContainer}}
` // override style if you want

// Logo Component content
export const Logo = () => (
  <StyledView>
    <Image source={logo} style={styles.logo} resizeMode="contain" />
  </StyledView>
)

// Logo Proptypes
Logo.propTypes = {}

// Logo Default props
Logo.defaultProps = {}

export default Logo
