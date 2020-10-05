import React, {useContext} from "react"
import {View, SafeAreaView, ScrollView, Image, I18nManager} from "react-native"
import PropTypes from "prop-types"
import {useTranslation} from "react-i18next"
import Entypo from "react-native-vector-icons/Entypo"
import i18next from "i18next"
import RNRestart from "react-native-restart"
import RNBootSplash from "react-native-bootsplash"

import constants from "../../constants"
import {RowItem, RowSeparator} from "../../components/RowItem"
import HeaderBar from "../../components/HeaderBar"
import themeStyles from "./styles"
import {ThemeContext} from "../../ContextUtils/ThemeContext"
import {LanguageContext} from "../../ContextUtils/LanguagesContext"

// Languages Component content
export const Languages = () => {
  const {allowedLanguages} = constants
  const keys = Object.keys(allowedLanguages)
  const {t} = useTranslation()
  const {styleableTheme} = useContext(ThemeContext)
  const styles = themeStyles(styleableTheme)
  const {currentLang, setLanguage} = useContext(LanguageContext)

  const changeLanguage = ({code, rtl}) => {
    i18next.changeLanguage(code).then(() => {
      setLanguage(code)
      I18nManager.forceRTL(rtl)
      RNBootSplash.show({duration: 700})
      setTimeout(() => {
        RNRestart.Restart()
      }, 1000)
    })
  }

  return (
    <View style={styles.root}>
      <HeaderBar title={t("common.languages")} />
      <SafeAreaView>
        <ScrollView>
          {keys.map((languageCode) => {
            const language = allowedLanguages[languageCode]
            return (
              <React.Fragment key={language.code}>
                <RowItem
                  testID={language.code}
                  title={language.title}
                  onPress={() => changeLanguage(language)}
                  rightIcon={
                    <View
                      style={{
                        flexDirection: "row",
                      }}>
                      {currentLang === languageCode ? (
                        <View style={{marginRight: 12}}>
                          <Entypo
                            name="check"
                            size={20}
                            color={styleableTheme[50]}
                          />
                        </View>
                      ) : null}
                      <View>
                        <Image source={language.flag} />
                      </View>
                    </View>
                  }
                />
                <RowSeparator />
              </React.Fragment>
            )
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

// Languages Proptypes
Languages.propTypes = {}

// Languages Default props
Languages.defaultProps = {}

export default Languages
