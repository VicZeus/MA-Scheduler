import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import WeeklyCalendar from 'react-native-weekly-calendar';


export default class Calendar extends Component {
  state = {
    sampleEvents: [
      { 'start': '2021-09-20 09:00:00', 'duration': '00:20:00', 'note': 'Sample Event 1' },
      { 'start': '2021-09-21 10:00:00', 'duration': '01:00:00', 'note': 'Sample Event 2' },
      { 'start': '2021-09-21 11:00:00', 'duration': '01:20:00', 'note': 'Sample Event 3' },
      { 'start': '2021-09-23 12:00:00', 'duration': '02:45:00', 'note': 'Sample Event 4' },
      { 'start': '2021-09-23 09:00:00', 'duration': '00:30:00', 'note': 'Sample Event 5' },
      { 'start': '2021-09-25 15:00:00', 'duration': '01:30:00', 'note': 'Sample Event 6' },
      { 'start': '2021-09-26 11:00:00', 'duration': '00:05:00', 'note': 'Sample Event 7' },
      { 'start': '2021-09-26 11:00:00', 'duration': '00:05:00', 'note': 'Sample Event 8' },
    ],
  }
  constructor(props) {
    super(props)
    this.getData()
  }
  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('array')
      const output = jsonValue != null ? JSON.parse(jsonValue) : null;
      this.setState({sampleEvents: output})
      console.log(output)
    } catch(e) {
      // error reading value
    }
  }


    
  render() {
    const styles = {
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }
    return (
      <View style={styles.container}>
        <WeeklyCalendar 
          events={this.state.sampleEvents} 
          style={{ position: 'absolute',top:0 }}  
          themeColor='#f00'
          startWeekday={8}
        />
        
      </View>
    );
  }
}