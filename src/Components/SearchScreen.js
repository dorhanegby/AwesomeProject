import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

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
      <Text>lets search for {query}</Text>
    );
  }
}

