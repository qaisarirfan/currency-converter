import React, {useContext} from "react"
import {Text, TouchableOpacity, View} from "react-native"
import PropTypes from "prop-types"
import themeStyles from "./styles"
import {ThemeContext} from "../../ContextUtils/ThemeContext"

// RowItem Component content
export const RowItem = ({title, onPress, rightIcon, ...rest}) => {
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  return (
    <TouchableOpacity onPress={onPress} style={styles.row} {...rest}>
      <Text style={styles.title}>{title}</Text>
      {rightIcon}
    </TouchableOpacity>
  )
}

// RowItem Proptypes
RowItem.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  rightIcon: PropTypes.node,
}

// RowItem Default props
RowItem.defaultProps = {
  onPress: () => {},
  rightIcon: null,
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
