import React, {useContext} from "react"
import {View, SafeAreaView, ScrollView} from "react-native"
import PropTypes from "prop-types"
import flow from "lodash/flow"
import Entypo from "react-native-vector-icons/Entypo"
import Color from "color"
import {useRoute} from "@react-navigation/native"
import themeStyles from "./styles"
import connect from "./connect"
import {RowItem, RowSeparator} from "../../components/RowItem"
import {HeaderBar} from "../../components/HeaderBar"
import {ThemeContext} from "../../ContextUtils/ThemeContext"

// Themes Component content
export const Themes = ({themes}) => {
  const {name} = useRoute()
  const {styleableTheme, changeTheme, defaultTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)

  const colors = Object.keys(themes) || []
  return (
    <View style={styles.root}>
      <HeaderBar title={name} />
      <SafeAreaView>
        <ScrollView>
          {colors.map((color, index) => (
            <React.Fragment key={`theme-${index + 1}`}>
              <RowItem
                testID={`theme-${index + 1}`}
                title={`Theme ${index + 1}`}
                onPress={() => changeTheme(color)}
                rightIcon={
                  <View
                    style={{
                      flexDirection: "row",
                    }}>
                    {defaultTheme === color ? (
                      <View style={{marginRight: 12}}>
                        <Entypo
                          name="check"
                          size={20}
                          color={styleableTheme[50]}
                        />
                      </View>
                    ) : null}
                    <View
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: color,
                      }}
                    />
                  </View>
                }
              />
              <RowSeparator />
            </React.Fragment>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

// Themes Proptypes
Themes.propTypes = {
  themes: PropTypes.object,
}

// Themes Default props
Themes.defaultProps = {
  themes: {},
}

export default flow([connect])(Themes)
