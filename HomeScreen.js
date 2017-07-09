import React, { Component } from 'react';
import { View, TouchableHighlight , Image, StyleSheet, FlatList, Text, ActivityIndicator} from 'react-native';
import {List, ListItem} from 'react-native-elements';

import PlaceHolders from './src/Components/PlaceHolders';
import Search from 'react-native-search-box';

import api from './utilities/api';

export default class HomeScreen extends Component {

        // Navigation title
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
            page: 0,
            updating: false,
        }
    }

    componentWillMount() {
         this.makeRemoteRequest();
    }

    /**
     * fetching data by category 
     * 
     * @param {*String} cat - category to data on
     */
    dataByCat(cat) {
        var data = [];
            for(i=0;i<this.state.num_games;i++) {
                if(this.state.games[i].categories.includes(cat))
                    data.push(this.state.games[i])
            }

        return data;
    }
    /**
     *  Searching function
     */
    onSearch = (text) => {
        
        this.props.navigation.navigate('SearchScreen', {
            query: text,
            });
            
     }

     /**
      * requesting more data from api
      */
  makeRemoteRequest = () => {
      api.getGames().then((res) => {
            this.setState({
                all_categories: res.categories,
                categories: this.state.page < res.categories.length ? [...this.state.categories,res.categories[this.state.page]] : this.state.categories,
                games: res.games,
                num_games: res.num_games,
                updating: false
            })
        })
  }
  /**
   * Function to handle onEndReached event
   */
  handleEnd = () => {
      if(!this.state.updating) {
            this.setState({
                    page: this.state.page + 1,
                    updating: true
            },() => {
                this.makeRemoteRequest();
            });
        }
    }
    /**
     * Function that renders an Activity Indicator on the list footer
     */
    renderFooter = () => {
        return (
            <View>
                <ActivityIndicator animating  />
            </View>
        );
    }
  
  render() {
    const { navigation } = this.props;
    const { page } = this.state.page;
    console.disableYellowBox = true;
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
                    onEndReached={this.handleEnd}
                    onEndReachedThreshold={0}
                    ListFooterComponent={this.renderFooter}
                   />
            </List>
      </View>
    );
  }
}
