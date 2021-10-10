import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Settings({navigation}){
    return(
        <View style={{ flex: 1, position: 'absolute', top: 0, left: '30%', width: '40%'}}>
            <Text style={{textAlign: 'center'}}>Settings</Text>
            <Button title='Color Theme' onPress={() => navigation.navigate('Color Theme')} />
        </View>
    )
}

// Settings(props), props.navigation. === Settings({navigation}), navigation.