import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewItem from './NewItem';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator()

export default function HomeScreenTab(){
  return(
    <Stack.Navigator
      initialRouteName="Home Screen"
      screenOptions={{
        headerStyle: {
        backgroundColor: '#f00',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Home Screen" component={HomeScreen}
      />
      <Stack.Screen name="New" component={NewItem} />
    </Stack.Navigator>
  )
}
