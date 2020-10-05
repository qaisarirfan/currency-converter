import {getLocales} from "react-native-localize"

const languageDetector = {
  type: "languageDetector",
  async: true, // If this is set to true, your detect function receives a callback function that you should call with your language, useful to retrieve your language stored in AsyncStorage for example
  detect: (callback) => {
    // You'll receive a callback if you passed async true
    /* return detected language */
    // callback('de'); if you used the async flag
    const {languageCode} = getLocales()
    callback(languageCode)
  },
  init: (services, detectorOptions, i18nextOptions) => {
    /* use services and options */
  },
  cacheUserLanguage: (lng) => {
    /* cache language */
  },
}

export default languageDetector
