import React, {useState} from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddNewItem({navigation}){
    const [name, setName] = useState("")
    console.log(name)

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
          // saving error
        }
    }
    
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_Key')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
        // error reading value
        }
    }

    getData('name')

    return(
        <View style={{ flex: 1, position: 'absolute', top: 0, left: '30%', width: '40%'}}>
            <Text style={{textAlign: 'center'}}>AddNewItem</Text>
            <TextInput
                onChangeText={setName}
                value={name}
                placeholder="Placerholder"
            />
            <Button title="Go Back" onPress={() => navigation.navigate("Home Screen", {name})}/>

            <Button title="Go Back2" onPress={storeData({name})} />

            <Text>{name}</Text>
        </View>
    )
}
