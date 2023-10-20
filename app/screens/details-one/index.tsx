import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenProps} from '../../navigations/paramslist';

export const DetailsScreenOne: React.FC<ScreenProps<'DetailsOne'>> = ({
  route,
}) => {
  const {item} = route.params;
  return (
    <SafeAreaView
      edges={['top', 'left', 'right', 'bottom']}
      style={[styles.container]}>
      <Text>Details Screen1 {item?.objectId}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
