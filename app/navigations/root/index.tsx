import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootParamsList} from '../paramslist';
import {AuthStackScreen} from '../auth';
import {useAppSelector} from '../../store/hooks';
import {HomeStackScreen} from '../home';

const RootStack = createStackNavigator<RootParamsList>();

export const RootNavigator = () => {
  const isAuth = useAppSelector(state => state.user.user);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isAuth ? (
        <RootStack.Screen component={AuthStackScreen} name="Auth" />
      ) : (
        <RootStack.Screen component={HomeStackScreen} name="App" />
      )}
    </RootStack.Navigator>
  );
};
