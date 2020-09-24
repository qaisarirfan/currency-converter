import React, {useContext} from "react"
import flow from "lodash/flow"
import {View, FlatList} from "react-native"
import PropTypes from "prop-types"
import {useNavigation, useRoute} from "@react-navigation/native"
import Entypo from "react-native-vector-icons/Entypo"

import themeStyles from "./styles"
import {RowItem, RowSeparator} from "../../components/RowItem"
import connect from "./connect"
import {ThemeContext} from "../../ContextUtils/ThemeContext"
import {HeaderBar} from "../../components/HeaderBar"
import {ConversionContext} from "../../ContextUtils/ConversionContext"

// CurrencyList Component content
export const CurrencyList = ({currencies}) => {
  const {push} = useNavigation()
  const {name, params} = useRoute()
  const {isBaseCurrency, title} = params

  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)

  const {
    baseCurrency,
    quoteCurrency,
    changeBaseCurrency,
    changeQuoteCurrency,
  } = useContext(ConversionContext)
  return (
    <View style={styles.root}>
      <HeaderBar title={title || name} />
      <FlatList
        data={currencies}
        renderItem={({item}) => {
          let selected = false

          if (isBaseCurrency && item.name === baseCurrency) {
            selected = true
          } else if (!isBaseCurrency && item.name === quoteCurrency) {
            selected = true
          }
          return (
            <RowItem
              title={item.name}
              onPress={() => {
                if (isBaseCurrency) {
                  changeBaseCurrency(item.name)
                } else {
                  changeQuoteCurrency(item.name)
                }
                push("Home")
              }}
              rightIcon={
                selected && (
                  <Entypo name="check" size={20} color={styleableTheme[50]} />
                )
              }
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
