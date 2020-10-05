import i18next from "i18next"
import {initReactI18next} from "react-i18next"
import {getLocales} from "react-native-localize"

import * as config from "../../configure/i18n"
import languageDetector from "./language-detector"

const configureI18next = () => {
  const {languageCode} = getLocales()[0]
  i18next.use(languageDetector).use(initReactI18next).init({
    lng: languageCode,
    resources: config.supportedLocales,
    fallbackLng: config.fallback,
  })
  return i18next
}

export default configureI18next
