import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthParamsList} from '../paramslist';
import {LoginScreen} from '../../screens/auth/login';

const AuthStack = createStackNavigator<AuthParamsList>();

export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
