import {StyleSheet} from "react-native"

// RowItem: Styling here
const styles = (theme) => {
  return StyleSheet.create({
    row: {
      paddingHorizontal: 20,
      paddingVertical: 16,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: theme[300],
    },
    title: {
      fontSize: 16,
      color: theme[50],
    },
    separator: {
      height: StyleSheet.hairlineWidth,
    },
  })
}

export default styles
