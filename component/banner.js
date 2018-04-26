import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Carousel } from 'antd-mobile';
import { AutoResizeImage } from './image.js';

export default class Banner extends Component {
  render() {
    const { list } = this.props;

    return (
      <Carousel
        autoplay={true}
        infinite
      >
        {
          list.map((item, index) => (
            <View key={index}>
              <AutoResizeImage uri={item.pic}/>
            </View>
          ))
        }
      </Carousel>
    );
  }
}