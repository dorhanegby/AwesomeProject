import React, { Component } from 'react';
import { AppRegistry, View, Text, Button, TouchableHighlight , Image, StyleSheet} from 'react-native';
import { StackNavigator,DrawerNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import Game from './src/Components/Game';
import SearchScreen from './src/Components/SearchScreen';


const Navigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Game: {
            screen: Game
        },
        SearchScreen: {
            screen: SearchScreen
        }
    });



export default class App extends Component {
  render() {
    return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
    )}
}


AppRegistry.registerComponent('AwesomeProject', () => App);