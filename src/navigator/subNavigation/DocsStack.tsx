import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import DocumentCenter from '../../view/screens/DocumentCenter';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DocumentCenterScreen" component={DocumentCenter} />
    </Stack.Navigator>
  );
}
