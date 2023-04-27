import React, { Component } from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/Screens/Home";
import Cadastro from "./src/Screens/Cadastro";
import Lista from "./src/Screens/Lista";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  Cadastro: {
    name: 'list'
  },
  Lista: {
    name: 'ios-people'
  }
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Tab.Screen name="Lista" component={Lista} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}