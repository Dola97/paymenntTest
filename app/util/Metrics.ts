import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Scales a given size horizontally based on the screen width.
 *
 * @param size - The dimension to scale.
 * @returns The scaled dimension based on the screen width.
 */
const horizontalScale: (size: number) => number = size => {
  if (isNaN(size) || size <= 0) {
    throw new Error('Invalid input size. Size must be a positive number.');
  }
  return (width / guidelineBaseWidth) * size;
};
/**
 * Scales a given size vertically based on the screen height
 * @param size The dimension to scale
 * @returns The scaled dimension based on the screen height.
 */
const verticalScale: (size: number) => number = size => {
  if (isNaN(size) || size <= 0) {
    throw new Error('Invalid input size. Size must be a positive number.');
  }
  return (height / guidelineBaseHeight) * size;
};
/**
 *  the moderateScale function combines both horizontal scaling (using horizontalScale) and an optional adjustment factor (factor) to modify the original size. This allows you to control how much the dimension should be scaled while maintaining responsiveness across different screen sizes in a React Native application. The function is particularly useful when you want to achieve a balanced and visually appealing scaling of elements in your UI.
 * @param size This parameter represents the original dimension (e.g., font size, margin, padding, etc.) that you want to scale.
 * @param factor This is an optional parameter that determines how much the size will be adjusted. By default, it is set to 0.5, which means the function will apply a moderate adjustment (50%) to the original size
 * @returns The scaled dimension, considering both horizontal scaling and a moderate adjustment.
 */
const moderateScale: (size: number, factor?: number) => number = (
  size,
  factor = 0.5,
) => size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
