import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
// import { View, Text } from 'react-native';
import ListView from '../component/listview.js';

@inject('accountStore')
@observer
export default class Account extends Component {
  componentWillMount = async () => {

  }
  render() {
    return (
      <ListView />
    );
  }
}
