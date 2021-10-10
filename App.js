import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/Tabs';


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}



//flex: 1,
//backgroundColor: '#fff',
//position: 'absolute',
//top:'94%',
//width: '100%',