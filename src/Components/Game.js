import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableHighlight } from 'react-native';

export default class Game extends Component {
    // Navigation title
    static navigationOptions = {
            headerTintColor: "blue",
            headerStyle: {
                backgroundColor:"green"
            }
        };
        
    constructor(props) {
        super(props);
    }
    /**
     * Function to handle click on picture event (linking to game)
     */
    linkPressed = (link) => {
        Linking.openURL(link).catch(err => console.error('an error occured', err));
    }
  render() {
    // Game data
    const {state} = this.props.navigation;
    const name = state.params.data.name;
    const description = state.params.data.description;
    const pic_url = state.params.data.thumb;
    const link = state.params.data.link;
    console.log(link);
    return (
      <View>
         <Text style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold'}}>Name: {name} {'\n'} </Text>
         <Text style={{
            color: 'grey',
            textAlign: 'left',
            fontSize: 18,}}>Game Description:{'\n'} {description}</Text>
         <TouchableHighlight  
           style={{width: 200, height: 200, top: 50, left: 50}}
          onPress={() => this.linkPressed(link)}>
            <Image
                    style={{width: 200, height: 200}}
                    source={{uri : pic_url}}
                />
         </TouchableHighlight>
      </View>
    );
  }
}