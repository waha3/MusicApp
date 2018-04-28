import React, { Component } from 'react';
import { FlatList, Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  wrap_left: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  wrap_right: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 4
  }
});

const List = ({trackCount, name, coverImgUrl}) => (
  <View style={styles.container}>
    <View style={styles.wrap_left}>
      <Image
        style={styles.image}
        source={{uri: coverImgUrl}}
      />
    </View>
    <View style={styles.wrap_right}>
      <Text>{name}</Text>
      <Text>{trackCount}首</Text>
    </View>
  </View>
);

export default class ListView extends Component {
  render() {
    const { list } = this.props;
    return (
      <FlatList
        data={list}
        renderItem={({item}, index) => <List {...item} key={index}/>}
      />
    );
  }
}
