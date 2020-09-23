import {Dimensions, StyleSheet} from "react-native"

// HeaderBar: Styling here
const styles = (theme) => {
  const screen = Dimensions.get("screen")
  const width = screen.width / 3
  return StyleSheet.create({
    root: {},
    header: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 12,
      paddingBottom: 12,
    },
    back: {
      width,
      justifyContent: "center",
      alignItems: "flex-start",
      paddingLeft: 6,
    },
    backButton: {
      display: "flex",
      flexDirection: "row",
    },
    title: {
      width,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme[800],
    },
    text: {
      color: theme[50],
      fontSize: 18,
      lineHeight: 18,
    },
    right: {
      width,
      alignItems: "flex-end",
      justifyContent: "center",
      paddingRight: 6,
    },
  })
}

export default styles
