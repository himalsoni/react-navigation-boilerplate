import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';
import Login from '../view/screens/Login';
import Drawer from '../view/screens/Drawer';

const Stack = createStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Tab" component={TabNavigation} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
