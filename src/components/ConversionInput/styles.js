import {StyleSheet} from "react-native"
import Color from "color"
// ConversionInput: Styling here
const styles = (theme) => {
  return StyleSheet.create({
    container: {
      backgroundColor: "#FFF",
      marginVertical: 10,
      marginHorizontal: 20,
      flexDirection: "row",
      borderRadius: 5,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme[200],
    },
    containerDisabled: {
      backgroundColor: "#f0f0f0",
    },
    button: {
      padding: 15,
      borderRightColor: theme[100],
      borderRightWidth: StyleSheet.hairlineWidth,
      backgroundColor: "#FFF",
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
    },
    buttonText: {
      fontSize: 18,
      color: "#000",
      fontWeight: "bold",
    },
    input: {
      flex: 1,
      padding: 10,
      fontSize: 16,
      color: Color(theme.A700).darken(0.6).hex(),
    },
  })
}
export default styles
