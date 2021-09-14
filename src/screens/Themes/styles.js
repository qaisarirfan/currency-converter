import {StyleSheet} from "react-native"

// Themes: Styling here
const styles = (styleableTheme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: styleableTheme[500],
    },
  })
}

export default styles
