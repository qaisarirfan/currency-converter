import React, {useContext} from "react"
import {SafeAreaView, ScrollView, View} from "react-native"
import PropTypes from "prop-types"
import flow from "lodash/flow"
import Entypo from "react-native-vector-icons/Entypo"
import {useNavigation, useRoute} from "@react-navigation/native"
import {RowItem} from "../../components/RowItem"
import {HeaderBar} from "../../components/HeaderBar"
import {ThemeContext} from "../../ContextUtils/ThemeContext"
import themeStyles from "./styles"
import connect from "./connect"

// Options Component content
export const Options = ({logout}) => {
  const {push} = useNavigation()
  const {name} = useRoute()
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  return (
    <View style={styles.root}>
      <HeaderBar title={name} />
      <SafeAreaView>
        <ScrollView>
          <RowItem
            testID="themes"
            title="Themes"
            onPress={() => push("Themes")}
            rightIcon={
              <Entypo
                name="chevron-right"
                size={20}
                color={styleableTheme[50]}
              />
            }
          />
          <RowItem
            title="Logout"
            testID="logout"
            onPress={logout}
            rightIcon={
              <Entypo name="log-out" size={20} color={styleableTheme[50]} />
            }
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

// Options Proptypes
Options.propTypes = {
  logout: PropTypes.func.isRequired,
}

// Options Default props
Options.defaultProps = {}

export default flow([connect])(Options)
