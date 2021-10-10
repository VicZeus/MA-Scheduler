import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './Settings';
import AccountScreen from './AccountScreen';
import CTheme from './ColorTheme';


const Stack = createStackNavigator()

export default function AccountTab(){
    return(
        <Stack.Navigator 
            screenOptions={{
                headerStyle: {
                backgroundColor: '#f00',
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen name="Account Screen" component={AccountScreen} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Color Theme" component={CTheme}/>
        </Stack.Navigator>
    )
}
