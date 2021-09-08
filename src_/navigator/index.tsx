import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigation from './TabNavigation';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() =>
          // navigation.navigate('Drawer')
          navigation.navigate('Tab')
        }
        title="Go to Home"
      />
      <Button
        onPress={() =>
          // navigation.navigate('SignupScreen')
          navigation.dispatch(CommonActions.navigate({name : 'SignupScreen'}))

        }
        title="Go to Signup"
      />
    </View>
  );
}
function SignupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() =>{
          navigation.goBack(null)
        }}
        title="Go Back"
      />
    </View>
  );
}
function DummyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'pink' }}>
      <Button
        onPress={() =>
          // navigation.navigate('Drawer')
          navigation.goBack()
        }
        title="Go Back"
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="DummyScreen" component={DummyScreen} />
        <Stack.Screen name="Tab" component={TabNavigation} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
