import React, { Component } from 'react';
import { View, TouchableHighlight , Image, StyleSheet, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

/**
 * Creates a horizontal list with a header
 */
export default class PlaceHolders extends Component {
    constructor(props) {
        super(props);
    }

    

  render() {
    const navigate  = this.props.navigator.navigate;
    const category = this.props.category
    var index = 0;
    return (
        <View>
            <TouchableHighlight style={{backgroundColor: '#D2FAD9', width: 400, height: 50}} 
            onPress={() => navigate('SearchScreen', { query: category })}
            >
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.titleText}>Category: {category}                  </Text>
                    <Icon size={20} color="blue" name="redo" />
                </View>
            </TouchableHighlight>
            <FlatList 
                horizontal={true}
                data={this.props.data}
                renderItem={({item}) => 
                <TouchableHighlight style={{width: 150, height: 150}} 
                    onPress={() => navigate('Game', { data: item })}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={{ uri: item.thumb }}
                    />
                </TouchableHighlight>
                }
                keyExtractor={(item) => (item.package_id) }
               
                    
            />
        </View>
    );
  }
}

// Styles
var styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    paddingTop: 10,

  },


  titleText: {
      color: '#64E6FF',
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 'bold'
  }

});


