import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoadingScreen from './LoadingScreen'
import MainScreen from './MainScreen'
import Add from './Add'
import Edit from './Edit'
export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name='Loading' component={LoadingScreen} options={{ headerShown: false, }} />
        <Stack.Screen name='Main' component={MainScreen} options={{ title: "สมาชิก" }}
        />
        <Stack.Screen name='Add' component={Add} options={{ title: "เพิ่มสมาชิก" }}
        />
        <Stack.Screen name='Edit' component={Edit} options={{ title: "แก้ไขสมาชิก" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}