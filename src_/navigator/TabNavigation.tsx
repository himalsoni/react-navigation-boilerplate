import * as React from 'react';
import { Button, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="DummyScreen" component={DummyScreen} />
    </Stack.Navigator>
  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'orange' }}>
      <Button onPress={() => alert('hi')} title="Click here" />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'grey' }}>
      <Button
        onPress={() => navigation.push('DummyScreen')}
        title="Go to Dummy"
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



const Tab = createBottomTabNavigator();

export default function() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }}/>
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}
