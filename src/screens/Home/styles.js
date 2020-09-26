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
    logoContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      height: screen.width * 0.3,
    },
    logo: {
      position: "absolute",
      width: screen.width * 0.4,
      height: screen.width * 0.4,
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
