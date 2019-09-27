//create photo component to import to the main app
import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class TestPhoto extends Component {
    render() {
        let pic = {
            uri: 'https://media.wzzm13.com/assets/WZZM/images/84ace90e-3939-4750-843b-4cb7a92c88fe/84ace90e-3939-4750-843b-4cb7a92c88fe_360x203.jpg'
        };
    return (
        <View>
            <Image source={pic} style={{width: 193, height:110}}/>
        </View>
        
    );
    }
}