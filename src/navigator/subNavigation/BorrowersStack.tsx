import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Borrowers  from '../../view/screens/Borrowers';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BorrowersScreen" component={Borrowers} />
    </Stack.Navigator>
  );
}
