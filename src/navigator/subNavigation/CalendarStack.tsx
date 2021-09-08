import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Calendar from '../../view/screens/Calendar';

const Stack = createStackNavigator();

export default function() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CalendarScreen" component={Calendar} />
    </Stack.Navigator>
  );
}
