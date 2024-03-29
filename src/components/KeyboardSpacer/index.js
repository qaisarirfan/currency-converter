import React, { useState, useEffect } from 'react';
import { Keyboard, View, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function KeyboardSpacer({ style, onToggle }) {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const updateKeyboardSpace = (event) => {
      if (!event.endCoordinates) {
        return;
      }

      const screenHeight = Dimensions.get('window').height;
      const newKeyboardSpace = screenHeight - event.endCoordinates.screenY;
      setKeyboardSpace(newKeyboardSpace);
      onToggle(true, newKeyboardSpace);
    };
    const showEvt = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    const showListener = Keyboard.addListener(showEvt, updateKeyboardSpace);

    const resetKeyboardSpace = () => {
      setKeyboardSpace(0);
      onToggle(false, 0);
    };
    const hideEvt = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    const hideListener = Keyboard.addListener(hideEvt, resetKeyboardSpace);

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return <View style={[styles.container, { height: keyboardSpace }, style]} />;
}

KeyboardSpacer.propTypes = {
  onToggle: PropTypes.func,
  style: PropTypes.shape({}),
};

KeyboardSpacer.defaultProps = {
  onToggle: () => null,
  style: {},
};

export default KeyboardSpacer;
