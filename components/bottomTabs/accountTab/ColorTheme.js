import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default function CTheme(props){
    
    const [selectedColor, setSelectedColor] = useState('#f00')

    return(
        <View style={{ flex: 1, position: 'absolute', top: 0, left: '30%', width: '40%'}}>
            <Text style={{textAlign: 'center'}}>Color Theme</Text>
            <Picker 
                style={{position: 'relative', left:'40%', width: '20%', height: 50}}
                selectedColor={selectedColor}
                onValueChange={(itemValue) => setSelectedColor(itemValue)} /* (itemValue, itemIndex) */
            >
                <Picker.Item label="Red" value="#f00" />
                <Picker.Item label="Green" value="#0f0"/>
                <Picker.Item label="Blue" value="#00f" />
            </Picker>
            <Text>{selectedColor}</Text>
        </View>
    )
}
