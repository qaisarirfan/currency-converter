import {StyleSheet} from "react-native"

// Languages: Styling here
const styles = (theme) => {
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme[500],
    },
  })
}

export default styles
