import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeStack from "./subNavigation/HomeStack";
import CalendarStack from "./subNavigation/CalendarStack";
import BorrowersStack from "./subNavigation/BorrowersStack";
import LoanCenterStack from "./subNavigation/LoanCenterStack";
import DocsStack from "./subNavigation/DocsStack";

import Images from '../constants/Images';
import { TYPOGRAPHY } from "../view/styles/typography";

const Tab = createBottomTabNavigator();

export default function() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = Images.home;
              } else if (route.name === 'Calendar') {
                iconName = Images.settings;
              } else if (route.name === 'Borrowers') {
                iconName = Images.settings;
              } else if (route.name === 'LoanCenter') {
                iconName = Images.settings;
              } else if (route.name === 'Docs') {
                iconName = Images.settings;
              }

              // You can return any component that you like here!
              return <Image source={iconName} style={{
                height: route.name === 'Home' ? 40 : 25,
                width: route.name === 'Home' ? 40 : 25,
                // marginTop : route.name === 'Home' ? 20 : 0,
                tintColor:focused ? TYPOGRAPHY.COLOR.tabActive : TYPOGRAPHY.COLOR.tabInActive}}
                resizeMode={'contain'}/>;

            },
            tabBarLabel : (route.name === 'Home' ? "" : route.name),
          })}
      >
      <Tab.Screen name="Calendar" component={CalendarStack} options={{ headerShown: false }}/>
      <Tab.Screen name="Borrowers" component={BorrowersStack} options={{ headerShown: false }}/>
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
      <Tab.Screen name="LoanCenter" component={LoanCenterStack} options={{ headerShown: false }}/>
      <Tab.Screen name="Docs" component={DocsStack} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
