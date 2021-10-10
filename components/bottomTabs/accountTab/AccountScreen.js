import React from 'react';
import {Text, View, Button} from 'react-native';

export default function Account({navigation}){
    return(
        <View style={{ flex: 1, position: 'absolute', top: 0, left: '30%', width: '40%'}}>
            <Text style={{textAlign: 'center'}}>Account</Text>
            <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
        </View>
    )
}

