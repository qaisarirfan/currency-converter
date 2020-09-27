import React, {useContext} from "react"
import {View, Text} from "react-native"
import PropTypes from "prop-types"
import {useNavigation} from "@react-navigation/native"
import Entypo from "react-native-vector-icons/Entypo"
import {TouchableOpacity} from "react-native-gesture-handler"
import themeStyles from "./styles"
import {CustomStatusBar} from "../CustomStatusBar"
import {ThemeContext} from "../../ContextUtils/ThemeContext"

// HeaderBar Component content
export const HeaderBar = ({title, isHeaderShow, rightContent}) => {
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  const {canGoBack, goBack} = useNavigation()

  let style = {}
  if (isHeaderShow) {
    style = {
      backgroundColor: styleableTheme[800],
    }
  } else {
    style = {
      paddingBottom: 0,
      paddingTop: 0,
    }
  }

  return (
    <View style={[styles.root, {...style}]}>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={styleableTheme[800]}
      />
      <View style={[styles.header, {...style}]}>
        <View style={styles.back}>
          {isHeaderShow && canGoBack() ? (
            <TouchableOpacity
              testID="back"
              onPress={goBack}
              style={styles.backButton}>
              <Entypo
                name="chevron-left"
                size={16}
                color={styleableTheme[50]}
              />
              <Text style={styles.text}>Back</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        {isHeaderShow ? (
          <View style={styles.title}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text}>
              {title}
            </Text>
          </View>
        ) : null}
        <View style={styles.right}>{rightContent}</View>
      </View>
    </View>
  )
}

// HeaderBar Proptypes
HeaderBar.propTypes = {
  isHeaderShow: PropTypes.bool,
  title: PropTypes.string.isRequired,
  rightContent: PropTypes.node,
}

// HeaderBar Default props
HeaderBar.defaultProps = {
  isHeaderShow: true,
  rightContent: null,
}

export default HeaderBar
