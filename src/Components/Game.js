import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

export default class Game extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    const {state} = this.props.navigation;
    const name = state.params.data.name;
    const description = state.params.data.description;
    const pic_url = state.params.data.thumb;
    console.log(pic_url);
    return (
      <View>
         <Text>Name: {name}, Age: {description}</Text>
         <Image
                style={{width: 100, height: 100}}
                source={{uri : pic_url}}
            />
      </View>
    );
  }
}