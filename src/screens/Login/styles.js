import Color from "color"
import {StyleSheet} from "react-native"

// Login: Styling here
const styles = (theme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme[500],
    },
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: "center",
    },
    inputContainer: {
      marginHorizontal: 20,
    },
    input: {
      padding: 14,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 18,
      color: Color(theme.A700).darken(0.6).hex(),
      backgroundColor: "#FFF",
      marginVertical: 10,
      flexDirection: "row",
      borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme[200],
    },
    submitButton: {
      backgroundColor: theme[900],
      padding: 10,
      margin: 15,
      alignItems: "center",
      height: 40,
      borderRadius: 20,
      overflow: "hidden",
    },
    submitButtonText: {
      color: theme[50],
      fontSize: 18,
    },
  })
}
export default styles
