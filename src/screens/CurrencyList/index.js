import React, {useContext} from "react"
import flow from "lodash/flow"
import {View, FlatList} from "react-native"
import PropTypes from "prop-types"
import {useNavigation, useRoute} from "@react-navigation/native"
import themeStyles from "./styles"
import {RowItem, RowSeparator} from "../../components/RowItem"
import connect from "./connect"
import {ThemeContext} from "../../ContextUtils/ThemeContext"
import {HeaderBar} from "../../components/HeaderBar"

// CurrencyList Component content
export const CurrencyList = ({currencies}) => {
  const {push} = useNavigation()
  const {name} = useRoute()
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  return (
    <View style={styles.root}>
      <HeaderBar title={name} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          return (
            <RowItem
              title={item.name}
              onPress={() => {
                push("Home")
              }}
              rightIcon={null}
            />
          )
        }}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => <View />}
      />
    </View>
  )
}

// CurrencyList Proptypes
CurrencyList.propTypes = {
  currencies: PropTypes.object,
}

// CurrencyList Default props
CurrencyList.defaultProps = {
  currencies: {},
}

export default flow([connect])(CurrencyList)
