import React, { Component } from 'react';
import { View, TouchableHighlight , Image, StyleSheet, Text, ScrollView, FlatList} from 'react-native';


export default class PlaceHolders extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    const navigate  = this.props.navigator.navigate;
    const category = this.props.category
    var index = 0;
    return (
        <View >
            <TouchableHighlight style={{width: 1000, height: 40}} 
            onPress={() => navigate('SearchScreen', { query: category })}
            >
            <Text style={styles.titleText}>Category: {category}>>></Text>
            </TouchableHighlight>
            <FlatList 
                horizontal={true}
                data={this.props.data}
                renderItem={({item}) => 
                <TouchableHighlight style={{width: 100, height: 100}} 
                    onPress={() => navigate('Game', { data: item })}>
                    <Image
                        style={{ width: 100, height: 100 }}
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

/*var styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    paddingTop: 10,

  },


  titleText: {
      color: '#8a2be2', // Purple header
      textAlign: 'left',
      fontSize: 20,
  }

});*/


