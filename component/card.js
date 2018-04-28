import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';

export default class Card extends Component {
  handlePress = () => {
    const { onPressIn } = this.props;
    onPressIn();
  }
  render() {
    const {
      playcount,
      title,
      uri,
      width
    } = this.props;
    return (
      <View
        style={{
          position: 'relative',
          width: width,
          height: width,
          marginBottom: 50
        }}
      >
        <View>
          <Text
            style={{
              width: width - 5,
              position: 'absolute',
              top: 0,
              textAlign: 'right',
              zIndex: 2,
              color: '#fff'
            }}
          >
            {`${~~(playcount / 10000)}万`}
          </Text>
          <TouchableHighlight
            onPress={this.handlePress}
          >
            <Image
              source={{uri: uri}}
              style={{
                width: width,
                height: width,
                borderRadius: 4,
                zIndex: 1
              }}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Text>{title}</Text>
        </View>
      </View>
    );
  }
}
