import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: 'text',
    };
  }

  onPress = a => {
    return a + 10;
  };

  change(x) {
    this.setState({data: x * 5});
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <TouchableHighlight onPress={this.onPress}>
          <Text> button test</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
