import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../view/screens/Home';
import ManageLeads from '../../view/screens/ManageLeads';

const Stack = createStackNavigator();

export default function({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="ManageLeads" component={ManageLeads} />
    </Stack.Navigator>
  );
}
