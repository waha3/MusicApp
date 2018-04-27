import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { observer, inject } from 'mobx-react';
import Banner from '../component/banner.js';
import Card from '../component/card.js';

const styles = StyleSheet.create({
  title: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingLeft: 10
  },
  text: {
    height: 40,
    lineHeight: 40
  }
});

const screenWidth = Dimensions.get('window').width;
const width = (screenWidth - 5 * 2 - 10 * 2) / 3;

@inject('homeStore')
@observer
export default class Home extends Component {
  state = {
    loading: true
  }

  componentDidMount = async () => {
    const {
      homeStore: {
        getBannerAction,
        getPersonlizedListAction
      }
    } = this.props;

    await getBannerAction();
    await getPersonlizedListAction();
    this.setState({
      loading: false
    });
  }

  render() {
    const {
      homeStore: {
        banner,
        personlizedList
      }
    } = this.props;
    return (
      <ScrollView>
        <Banner list={banner} />
        <View style={styles.title}>
          <Text style={styles.text}>推荐歌单</Text>
        </View>
        <View
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {
            personlizedList.slice(0, 9).map((item, index) => (
              <Card
                width={width}
                key={index}
                playcount={item.playCount}
                uri={item.picUrl}
                title={item.name}
              />
            ))
          }
        </View>
      </ScrollView>
    );
  }
}
