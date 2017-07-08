import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

export default class Game extends Component {
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
    const name = state.params.data.name;
    const description = state.params.data.description;
    const pic_url = state.params.data.thumb;
    return (
      <View>
         <Text>Name: {name} </Text>
         <Text>{description}</Text>
         <Image
                style={{width: 100, height: 100}}
                source={{uri : pic_url}}
            />
      </View>
    );
  }
}