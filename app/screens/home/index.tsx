import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {TransactionList} from './components/list';
import {Button} from '../../components/button';
import {useAppDispatch} from '../../store/hooks';
import {logout} from '../../store/user/user-slice';

export const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const transactionData = require('../../constants/generated.json');
  return (
    <SafeAreaView
      edges={['top', 'left', 'right', 'bottom']}
      style={[styles.container]}>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
      <TransactionList data={transactionData} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
