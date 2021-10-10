import React from 'react';
import {View} from 'react-native';
import Calendar from './Calendar';

export default function CalendarTab(){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calendar />
    </View>
  )
}

