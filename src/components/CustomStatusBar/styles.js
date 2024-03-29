import { Platform, StatusBar, StyleSheet } from 'react-native';
import { getStatusBarHeight } from '../../utils/getStatusBarHeight';

const StatusBarHeight = Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBarHeight,
  },
});

export default styles;
