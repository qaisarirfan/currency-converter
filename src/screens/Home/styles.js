import {Dimensions, StyleSheet} from "react-native"

const screen = Dimensions.get("window")

// Home: Styling here
const styles = (styleableTheme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: styleableTheme[500],
    },
    header: {
      alignItems: "flex-end",
      marginHorizontal: 20,
    },
    content: {
      paddingTop: screen.height * 0.04,
    },
    textHeader: {
      color: styleableTheme[50],
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
      marginBottom: 20,
    },
  })
}

export default styles
