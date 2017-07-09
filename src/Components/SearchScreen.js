import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export default class SearchScreen extends Component {
    static navigationOptions = {
            headerTintColor: "blue",
            headerStyle: {
                backgroundColor:"green"
            }
        };
    constructor(props) {
        super(props);
    }
  render() {
    const {state} = this.props.navigation;
    const query = state.params.query;
    return (
        <View>    
            <Text>Searching: {query}...</Text>
            <Text>Feature not implemented yet...</Text>            
        </View>    
    );  
  }
}

