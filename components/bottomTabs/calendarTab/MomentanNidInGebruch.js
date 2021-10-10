import React, { useState, useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import WeeklyCalendar from 'react-native-weekly-calendar';


export default function Calendar(){
  
  const sampleEvents = [
    { 'start': '2020-03-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog' },
    { 'start': '2020-03-24 14:00:00', 'duration': '01:00:00', 'note': 'Doctor\'s appointment' },
    { 'start': '2020-03-25 08:00:00', 'duration': '00:30:00', 'note': 'Morning exercise' },
    { 'start': '2020-03-25 14:00:00', 'duration': '02:00:00', 'note': 'Meeting with client' },
    { 'start': '2021-08-12 19:00:00', 'duration': '01:00:00', 'note': sampleState },
    { 'start': '2020-03-26 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
    { 'start': '2020-03-26 11:00:00', 'duration': '02:00:00', 'note': 'Schedule 2' },
    { 'start': '2020-03-26 15:00:00', 'duration': '01:30:00', 'note': 'Schedule 3' },
    { 'start': '2020-03-26 18:00:00', 'duration': '02:00:00', 'note': 'Schedule 4' },
    { 'start': '2020-03-26 22:00:00', 'duration': '01:00:00', 'note': 'Schedule 5' }
  ]
  return (
    <View style={styles.container}>
      <WeeklyCalendar 
        events={sampleEvents} 
        style={{ height: '100%' }}  
        themeColor='#f00'
        startWeekday='1'
      />
    </View>
  )
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

