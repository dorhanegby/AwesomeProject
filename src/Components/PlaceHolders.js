import React, { Component } from 'react';
import { View, TouchableHighlight , Image, StyleSheet, Text} from 'react-native';


export default class PlaceHolders extends Component {
    constructor(props) {
        super(props);
    }
  
  render() {
    const navigate  = this.props.navigator.navigate;
    const category = this.props.category;
    return (
        <View >
            <Text style={styles.titleText}>Category: {category}</Text>
            <TouchableHighlight style={{width: 40, height: 40}} 
            onPress={() => navigate('Game', {data: this.props.data})}>
            <Image
                style={{width: 40, height: 40}}
                source={require('./btn.png')}
            />
            </TouchableHighlight>
        </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    paddingTop: 10,

  },


  titleText: {
      color: '#8a2be2', // Purple header
      textAlign: 'left',
      fontSize: 20,
  }

});


