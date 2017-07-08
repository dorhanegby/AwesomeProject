import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FixedHeaderScrollView from 'react-native-fixed-header-scroll-view';


export default class FixedHeader extends Component {
  render() {
    return(
       <FixedHeaderScrollView
          renderFixedHeader={() => (
            <View style={{ height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>I'm a fixed header</Text>
            </View>
            )}>
        </FixedHeaderScrollView>
    )
  }
}




