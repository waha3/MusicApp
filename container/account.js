import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text } from 'react-native';

@inject('accountStore')
@observer
export default class Account extends Component {
  componentWillMount = async () => {

  }
  render() {
    return (
      <View>{''}</View>
    );
  }
}
