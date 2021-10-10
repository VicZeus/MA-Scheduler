import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarTab from './bottomTabs/calendarTab/CalendarTab';
import HomeScreenTab from './bottomTabs/homescreenTab/HomescreenTab';
import TodoTab from './bottomTabs/todoTab/TodoTab';
import AccountTab from './bottomTabs/accountTab/AccountTab';


const Tab = createBottomTabNavigator()

export default function MyTabs() {
  return (
    <Tab.Navigator 
      tabBarOptions={{
        style: {position: 'absolute', backgroundColor: '#f00'},
        activeTintColor: '#fb0',
        inactiveTintColor: '#fff'
      }}
    >
      <Tab.Screen name="Home" component={HomeScreenTab} />
      <Tab.Screen name="Calendar" component={CalendarTab} />
      <Tab.Screen name="Account Settings" component={AccountTab}/>
    </Tab.Navigator>
  )
}



//const Stack = createStackNavigator();

//function App() {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator>
//        <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//    </NavigationContainer>
//  );
//}

//export default App;