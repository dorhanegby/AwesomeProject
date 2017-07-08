import React, { Component } from 'react';
import { View, TouchableHighlight , Image, StyleSheet, FlatList, Text} from 'react-native';
import {List, ListItem} from 'react-native-elements';

import CategoryHeader from './src/Components/CategoryHeader';
import PlaceHolders from './src/Components/PlaceHolders';
import Search from 'react-native-search-box';

import api from './utilities/api';

export default class HomeScreen extends Component {
    
        static navigationOptions = {
            title: 'Home page',
            headerTintColor: "blue",
            headerStyle: {
                backgroundColor:"green"
            }
        };
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

    onSearch = (text) => {
        console.log(this.state.games[0]);
        this.props.navigation.navigate('SearchScreen', {query: text});
            
     }

  render() {
    const { navigation } = this.props;
     
    return (
      <View>
          <Search
          ref="search_box"
          onSearch={this.onSearch}
        />
            <List> 
                <FlatList
                    data={this.state.categories}
                    renderItem={({item}) =>
                    <PlaceHolders navigator ={navigation} category={item} data={this.dataByCat(item)} />
                    }
                    keyExtractor={(item) => item}
                   />
            </List>
      </View>
    );
  }
}
