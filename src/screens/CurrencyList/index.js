import React, {useContext} from "react"
import flow from "lodash/flow"
import get from "lodash/get"
import filter from "lodash/filter"
import {View, FlatList, TouchableOpacity} from "react-native"
import PropTypes from "prop-types"
import {useNavigation, useRoute} from "@react-navigation/native"
import Entypo from "react-native-vector-icons/Entypo"
import CheckBox from "@react-native-community/checkbox"
import cc from "currency-codes"

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
    toggleFavorite,
  } = useContext(ConversionContext)

  const exclude = isBaseCurrency ? quoteCurrency : baseCurrency

  return (
    <View style={styles.root}>
      <HeaderBar title={title || name} />
      <FlatList
        data={filter(rates, (rate) => {
          return exclude !== rate.name
        })}
        renderItem={({item}) => {
          let selected = false

          if (isBaseCurrency && item.name === baseCurrency) {
            selected = true
          } else if (!isBaseCurrency && item.name === quoteCurrency) {
            selected = true
          }
          const {currency} = cc.code(item.name)
          return (
            <RowItem
              title={`${item.name} (${currency})`}
              isButton={false}
              rightIcon={
                <View
                  style={{
                    flexDirection: "row",
                  }}>
                  <TouchableOpacity
                    style={{
                      paddingRight: 12,
                    }}
                    onPress={() => toggleFavorite(item.name)}>
                    <Entypo
                      name={item.isFavorite ? "star" : "star-outlined"}
                      size={30}
                      color={item.isFavorite ? "#FFDE00" : styleableTheme[500]}
                    />
                  </TouchableOpacity>
                  <CheckBox
                    value={selected}
                    tintColor={styleableTheme[900]}
                    onCheckColor={styleableTheme[50]}
                    onFillColor={styleableTheme[700]}
                    onTintColor={styleableTheme[900]}
                    onValueChange={() => {
                      if (isBaseCurrency) {
                        changeBaseCurrency(item.name)
                      } else {
                        changeQuoteCurrency(item.name)
                      }
                      push("Home")
                    }}
                  />
                </View>
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
