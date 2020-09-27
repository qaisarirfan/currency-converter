import React, {useContext} from "react"
import {Text, TouchableOpacity, View} from "react-native"
import PropTypes from "prop-types"
import themeStyles from "./styles"
import {ThemeContext} from "../../ContextUtils/ThemeContext"

// RowItem Component content
export const RowItem = ({title, isButton, onPress, rightIcon, ...rest}) => {
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  let component = (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {rightIcon}
    </View>
  )
  if (isButton) {
    component = (
      <TouchableOpacity onPress={onPress} style={styles.row} {...rest}>
        <Text style={styles.title}>{title}</Text>
        {rightIcon}
      </TouchableOpacity>
    )
  }
  return component
}

// RowItem Proptypes
RowItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  rightIcon: PropTypes.node,
  isButton: PropTypes.bool,
}

// RowItem Default props
RowItem.defaultProps = {
  onPress: () => {},
  rightIcon: null,
  isButton: true,
}

export const RowSeparator = () => {
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  return <View style={styles.separator} />
}

// RowSeparator Proptypes
RowSeparator.propTypes = {}

// RowSeparator Default props
RowSeparator.defaultProps = {}
