import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

export default class Base extends Component {
  componentWillMount = async () => {
    const {
      navigation: {
        navigate
      }
    } = this.props;

    const islogin = await AsyncStorage.getItem('@uid');

    if (islogin) {
      navigate('Main');
    } else {
      navigate('LoginButton');
    }
  }

  render() {
    return (
      <View>
        <Text>{''}</Text>
      </View>
    );
  }
}
