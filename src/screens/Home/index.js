import React, {useContext, useEffect, useState} from "react"
import {View, TouchableOpacity, Text, ActivityIndicator} from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import PropTypes from "prop-types"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {useNavigation} from "@react-navigation/native"
import get from "lodash/get"
import {useTranslation} from "react-i18next"

import {KeyboardSpacer} from "../../components/KeyboardSpacer"
import {ConversionInput} from "../../components/ConversionInput"
import {ReverseButton} from "../../components/ReverseButton"
import themeStyles from "./styles"
import HeaderBar from "../../components/HeaderBar"
import {ThemeContext} from "../../ContextUtils/ThemeContext"
import {ConversionContext} from "../../ContextUtils/ConversionContext"
import {Logo} from "../../components/Logo"

// Home Component content
export const Home = () => {
  const {push, navigate} = useNavigation()
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  const {t} = useTranslation()
  const [value, setValue] = useState("100")

  const {
    getRates,
    rates,
    baseCurrency,
    quoteCurrency,
    swapCurrency,
    loader,
  } = useContext(ConversionContext)

  useEffect(() => {
    getRates(baseCurrency)
  }, [baseCurrency])

  const conversionRate =
    (rates && rates.find((rate) => rate.name === quoteCurrency)) || {}

  const rate = get(conversionRate, "rate", 0)
  const inputValue = parseFloat(value) || 0
  let convertedValue = t("home.converting")

  if (!loader) {
    convertedValue = (rate * inputValue).toFixed(2)
  }

  return (
    <View style={styles.root} testID="welcome">
      <HeaderBar
        title={t("home.title")}
        isHeaderShow={false}
        rightContent={
          <TouchableOpacity
            testID="options_screen_button"
            onPress={() => push("Options")}>
            <Entypo name="cog" size={32} color="#fff" />
          </TouchableOpacity>
        }
      />
      <KeyboardAwareScrollView
        testID="home_screen"
        scrollEnabled
        behavior="padding">
        <View style={styles.content}>
          <Logo />
          <Text style={styles.textHeader}>{t("home.currency_converter")}</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              keyboardType="numeric"
              testID="conversion_input_1"
              value={value.toString()}
              text={baseCurrency}
              onChangeText={setValue}
              onButtonPress={() =>
                navigate("Options", {
                  screen: "CurrencyList",
                  params: {
                    title: t("home.base_currency"),
                    isBaseCurrency: true,
                  },
                })
              }
            />
            <ConversionInput
              editable={false}
              testID="conversion_input_2"
              text={quoteCurrency}
              value={convertedValue}
              onButtonPress={() =>
                navigate("Options", {
                  screen: "CurrencyList",
                  params: {
                    title: t("home.quote_currency"),
                    isBaseCurrency: false,
                  },
                })
              }
            />
            <ReverseButton
              text={t("home.reverse_currencies")}
              onPress={swapCurrency}
            />
            {loader ? <ActivityIndicator color="#fff" /> : null}
          </View>
          <KeyboardSpacer onToggle={(visible) => setScrollEnabled(visible)} />
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}

// Home Proptypes
Home.propTypes = {}

// Home Default props
Home.defaultProps = {}

export default Home
