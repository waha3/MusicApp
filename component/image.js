import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export class AutoResizeImage extends Component {
  state = {
    width: null,
    height: null
  }

  componentDidMount = () => {
    const { uri } = this.props;

    Image.getSize(uri, (width, height) => {
      const _height = screenWidth * height / width;
      this.setState({
        height: _height,
        width: width
      });
    });
  }

  render() {
    const {
      height
    } = this.state;
    const { uri } = this.props;
    return (
      <Image
        source={{uri: uri}}
        style={{height: height}}
      />
    );
  }
}
