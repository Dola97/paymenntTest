// themes.ts
import {Dimensions, StyleSheet} from 'react-native';

export const {height, width} = Dimensions.get('window');
export const scaleFactor = width < 350 ? 0.8 : 1.0;
enum Colors {
  primary = '#007bff',
  secondary = '#6c757d',
  error = '#B00020',
  background = '#f8f9fa',
  text = '#333333',
  white = '#fff',
  transparent = 'rgba(0, 0, 0, 0.3)',
}

export interface Fonts {
  regular: string;
  bold: string;
  medium: string;
}

enum FontSizes {
  xs = 4,
  sm = 8,
  md = 12,
  lg = 14,
  xl = 18,
  '2xl' = 24,
  '3xl' = 28,
}
enum Spaces {
  xs = 8,
  sm = 14,
  md = 18,
  lg = 24,
  xl = 28,
  '2xl' = 32,
  '3xl' = 36,
}

const fonts: Fonts = {
  regular: 'FiraSans-Regular',
  bold: 'FiraSans-Bold',
  medium: 'FiraSans-Medium',
};

export const constStyles = StyleSheet.create({
  rowBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export const theme = {
  fonts,
  Colors,
  Spaces,
  FontSizes,
  // Add more style properties here
};
