import {Button, View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';

export default class AddNewItem extends Component {
    state = {
        username: '',
        token: '',
        array: [
            { 'start': '2021-09-23 09:30:00', 'duration': '01:00:00', 'note': 'Schedule 1' },
        ]
    }
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.getData()
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
    getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('array')
          const arrayValue = JSON.parse(jsonValue)
          if (arrayValue !== null) {
            this.setState( {array: arrayValue} ) 
          }
        } catch(e) {
          // error reading value
        }
    }
    render() {
        const {navigation} = this.props
        //Damit navigation.goBack() in der class component funktioniert

        return(
            <View style={{ flex: 1, position: 'absolute', top: 0, left: '30%', width: '40%'}}>
                <Text style={{textAlign: 'center'}}>AddNewItem</Text>
                <TextInput
                    onChangeText={val => this.setState({ username: val })}
                    value={this.state.username}
                    placeholder="Placerholder"
                />
                <Button title="Go Back" onPress={() => navigation.goBack()} />
                <Button title='AsyncstorageTest' onPress={this.onSubmit} />
                <Button title='Log' onPress={() => console.log(this.state.array)}/>
            </View>
        )
    }
}