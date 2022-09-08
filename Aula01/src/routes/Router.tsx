import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home';
import SearchScreen from '../screens/Search/Search';
import Parent from '../components/Parent/Parent';
import StackScreen01 from '../screens/StackScreen01/StackScreen01';
import StackScreen02 from '../screens/StackScreen02/StackScreen02';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function BottomTabsNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Parent" component={Parent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen01" component={StackScreen01} />
        <Stack.Screen name="Screen02" component={StackScreen02} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
