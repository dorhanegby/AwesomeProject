import React, { Component } from 'react';
import { AppRegistry, View, } from 'react-native';
import { StackNavigator,DrawerNavigator } from 'react-navigation';

/**
 * Screens components 
 */
import HomeScreen from './HomeScreen';
import Game from './src/Components/Game';
import SearchScreen from './src/Components/SearchScreen';

/**
 * Screen states
 */
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


/**
 * Application starts here
 */
export default class App extends Component {
  render() {
    return (
    <View style={{flex: 1}}>
      <Navigator />
    </View>
    )}
}


AppRegistry.registerComponent('AwesomeProject', () => App);