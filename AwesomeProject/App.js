import React from 'react'
import Welcome from './Components/Welcome'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Verify from './Components/Verify';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Verify" component={Verify} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}