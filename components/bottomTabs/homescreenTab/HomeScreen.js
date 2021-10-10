import {Button, View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';

export default class HomeScreenTab extends Component {
  state = {
    priority: '',
    duration: '',
    note: '',
    deadline: '',
    array: [{'start': '2020-03-23 09:00:00', 'duration': '00:20:00', 'note': 'Walk my dog'}]
  }
  constructor(props) {
      super(props)
      this.getData()
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      if(value !== null) {
        this.setState({ token: value })
      // value previously stored
      }
    } 
    catch(e) {
        // error reading value
    }
  }

  onSubmit = async () => {
    try {
        const jsonValue = JSON.stringify(this.state.array)
        await AsyncStorage.setItem('array', jsonValue)
        console.log(jsonValue)
    } catch (err) {
        console.log(er)
    }
}

  addItemToArray(e){
    e.preventDefault();
    const start = this.state.start
    const duration = this.state.duration
    const note = this.state.note
    const obj = {'start':start, 'duration':duration, 'note':note}
    const newArray = this.state.array.slice(); // Create a copy
    newArray.push(obj); // Push the object
    this.setState({ array: newArray })
    console.log(this.state.array)  
}

  render() {
    const {navigation} = this.props
    //Damit navigation.goBack() in der class component funktioniert

    return(
      <View style={{ flex: 1, position: 'absolute', top: 0, left: '30%', width: '40%'}}>
        <Text style={{ fontSize: 25 }}>Taskname</Text>
        <Text style={{ fontSize: 15 }}>Eingabe des Taskname oder der Beschreibung der Task</Text>
        <TextInput
          onChangeText={val => this.setState({ note: val })}
          value={this.state.note}
          placeholder="Taskname"
        />
        <Text style={{ fontSize: 25 }}>Dauer</Text>
        <Text style={{ fontSize: 15 }}>Angabe wie lange die Task dauert</Text>
        <TextInput
          onChangeText={val => this.setState({ duration: val })}
          value={this.state.duration}
          placeholder="Format: hours:minutes, Example: 3:15"
        />
        <Text style={{ fontSize: 25 }}>Priorität</Text>
        <Text style={{ fontSize: 15 }}>Eingabe der Priorität der Task mit einem Wert zwischen 1&10</Text>
        <TextInput
          onChangeText={val => this.setState({ priority: val })}
          value={this.state.priority}
          placeholder="1-10"
        />
        <Text style={{ fontSize: 25 }}>Deadline</Text>
        <Text style={{ fontSize: 15 }}>Eingabe der Deadline der Task</Text>
        <TextInput
          onChangeText={val => this.setState({ deadline: val })}
          value={this.state.deadline}
          placeholder="Datum der Deadline"
        />
        <Button title='Sumbit' onPress={this.onSubmit}/>
      </View>
      )
  }
}