import React, { Component } from 'react';
import { View, StyleSheet, Text , Button} from 'react-native';
import { StackNavigator,DrawerNavigator } from 'react-navigation';

export default class CategoryHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            name: props.name
        }
    }
  render() {
    return(
        <View style={styles.container}>
            <Text style={styles.titleText}>{this.state.name} </Text>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    paddingTop: 10,
    width: 50, 
    height: 50
  },

  titleText: {
      color: '#8a2be2', // Purple header
      textAlign: 'left',
      fontSize: 20,
  }

});