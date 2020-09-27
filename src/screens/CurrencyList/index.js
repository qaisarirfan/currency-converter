import React, {useContext} from "react"
import flow from "lodash/flow"
import get from "lodash/get"
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
export const CurrencyList = () => {
  const {push} = useNavigation()
  const {name, params} = useRoute()

  const isBaseCurrency = get(params, "isBaseCurrency", false)
  const title = get(params, "title", "")

  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)

  const {
    baseCurrency,
    quoteCurrency,
    changeBaseCurrency,
    changeQuoteCurrency,
    rates,
  } = useContext(ConversionContext)
  return (
    <View style={styles.root}>
      <HeaderBar title={title || name} />
      <FlatList
        data={rates}
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
CurrencyList.propTypes = {}

// CurrencyList Default props
CurrencyList.defaultProps = {}

export default flow([connect])(CurrencyList)
