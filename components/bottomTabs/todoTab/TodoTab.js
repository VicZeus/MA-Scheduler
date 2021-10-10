import {Button, View, Text,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';

export default class TodoTab extends Component {
    state = {
        token: ''
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
        } catch(e) {
          // error reading value
        }
      }
    
    render() {
        const {navigation} = this.props
        //Damit navigation.goBack() in der class component funktioniert

        return(
            <View style={{ flex: 1, position: 'absolute', top: 0, left: '30%', width: '40%'}}>
                <Text style={{textAlign: 'center'}}>Home Screen</Text>
                <Button title="Add a new Task" onPress={() => navigation.navigate('New')} />
                <Text> {this.state.token} </Text>
            
            </View>
        )
    }
}
