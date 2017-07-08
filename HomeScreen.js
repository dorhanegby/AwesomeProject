import React, { Component } from 'react';
import { View, TouchableHighlight , Image, StyleSheet, FlatList, Text} from 'react-native';
import {List, ListItem} from 'react-native-elements';

import CategoryHeader from './src/Components/CategoryHeader';
import FixedHeader from './src/Components/FixedHeader';
import PlaceHolders from './src/Components/PlaceHolders';

import api from './utilities/api';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            games: [],
            num_games: 0,
        }
    }

    componentWillMount() {
        api.getGames().then((res) => {
            this.setState({
                categories: res.categories,
                games: res.games,
                num_games: res.num_games,
            })
        })
    }

    dataByCat(cat) {
    var data = [];
        for(i=0;i<this.state.num_games;i++) {
            if(this.state.games[i].categories.includes(cat))
                data.push(this.state.games[i])
        }

    return data;
}

    
  render() {
    const { navigation } = this.props;
    const cat1 = this.state.categories[0]
    const cat1_data = this.dataByCat(cat1);
    const cat2 = this.state.categories[1]
    const cat2_data = this.dataByCat(cat2);
    const cat3 = this.state.categories[2]
    const cat3_data = this.dataByCat(cat3);
    return (
      <View style={{flex:1}}>
         <FixedHeader />
         <List> 
            <FlatList
                data={this.state.games}
                renderItem={({item}) => 
                <PlaceHolders navigator ={navigation} category={"cat"} data={item} />
                }
            />
           
        </List>
      </View>
    );
  }
}

/*  <PlaceHolders navigator ={navigation} category={cat1} data={cat1_data} />
            <PlaceHolders navigator ={navigation} category={cat2} data={cat2_data} />
            <PlaceHolders navigator ={navigation} category={cat3} data={cat3_data} />*/


