import React from 'react'
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Registration from '../screens/auth/registration';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen  name="registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
