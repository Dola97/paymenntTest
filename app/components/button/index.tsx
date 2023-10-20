import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {scaleFactor, theme} from '../../theme';
import {moderateScale} from '../../util/Metrics';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  textStyle,
  buttonStyle,
  icon,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.1}
      style={[styles.button, buttonStyle]}
      {...restProps}>
      {icon ? icon : <Text style={[styles.text, textStyle]}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.Colors.primary,
    paddingVertical: 10 * scaleFactor,
    paddingHorizontal: 20 * scaleFactor,
    borderRadius: 8 * scaleFactor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.Colors.white,
    fontSize: moderateScale(theme.FontSizes.xl),
    fontFamily: theme.fonts.bold,
  },
});
