// example of a container component
import React, { Component } from 'react';
import { View } from 'react-native';


export class ContainerDemo extends Component {
    componentWillMount() {
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={this.props.style}>
                {this.props.children}
            </View>
        );
    }
}