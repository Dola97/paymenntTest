import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppParamsList} from '../paramslist';
import {HomeScreen} from '../../screens/home';
import {ErrorScreen} from '../../screens/error';
import {DetailsScreenOne} from '../../screens/details-one';
import {DetailsScreenTwo} from '../../screens/details-two';

const HomeStack = createStackNavigator<AppParamsList>();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Error" component={ErrorScreen} />
      <HomeStack.Screen name="DetailsOne" component={DetailsScreenOne} />
      <HomeStack.Screen name="DetailsTwo" component={DetailsScreenTwo} />
    </HomeStack.Navigator>
  );
};
