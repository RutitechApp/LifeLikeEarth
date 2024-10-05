import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import colors from '../utils/colors';

export const OptionButton = ({
  fullWidth,
  buttonText,
  width,
  disabled,
  type,
  onPress,
}) => {
  const screenDimensions = Dimensions.get('screen');
  const styles = getStyles(screenDimensions);

  return (
    <Pressable
      style={[
        styles.button,
        {
          width: width || 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
          borderWidth: 2,
          borderColor: colors[type],
          alignSelf: fullWidth ? 'stretch' : 'center',
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.buttonText,
          {color: disabled ? colors[type] : 'white'},
        ]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

const getStyles = screenDimensions => {
  const isTablet = screenDimensions.width > 1000;

  const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 20,
      margin: 5,
    },
    buttonText: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: isTablet ? 20 : 14,
    },
  });
  return styles;
};
