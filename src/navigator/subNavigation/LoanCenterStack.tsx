import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import LoanCenter from '../../view/screens/LoanCenter';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoanCenterScreen" component={LoanCenter} />
    </Stack.Navigator>
  );
}
