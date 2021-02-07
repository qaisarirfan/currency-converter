import {Dimensions, StyleSheet} from "react-native"

const screen = Dimensions.get("window")

// Home: Styling here
const styles = (theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme[500],
    },
    header: {
      alignItems: "flex-end",
      marginHorizontal: 20,
    },
    content: {
      paddingTop: screen.height * 0.04,
    },
    textHeader: {
      color: theme[50],
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
      marginBottom: 20,
    },
    listWrapper: {
      padding: 12,
      backgroundColor: "white",
    },
    list: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 6,
      paddingTop: 6,
      justifyContent: "space-between",
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: theme[500],
    },
  })

export default styles
