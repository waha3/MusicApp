import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { observer, inject } from 'mobx-react';
import Banner from '../component/banner.js';
import { NavBar } from 'antd-mobile';

@inject('homeStore')
@observer
export default class Home extends Component {
  componentDidMount = async () => {
    const {
      homeStore: {
        getBannerAction
      }
    } = this.props;

    await getBannerAction();
  }

  render() {
    const {
      homeStore: {
        banner
      }
    } = this.props;
    return (
      <View>
        <Banner list={banner} />
      </View>
    );
  }
}