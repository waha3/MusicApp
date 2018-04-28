import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, RefreshControl } from 'react-native';
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
    loading: true,
    isRefreshing: false
  }

  componentDidMount = async () => {
    await this.getData();

    this.setState({
      loading: false
    });
  }

  getData = async () => {
    const {
      homeStore: {
        getBannerAction,
        getPersonlizedListAction
      }
    } = this.props;

    const res = await Promise.all([
      getBannerAction(),
      getPersonlizedListAction()
    ]);
    return res;
  }

  handleRefresh = async () => {
    this.setState({
      isRefreshing: true
    });

    await this.getData();

    this.setState({
      isRefreshing: false
    });
  }

  handlePress = (item) => {
    const {
      navigation: {
        navigate
      }
    } = this.props;

    navigate('Detail', {
      id: item.id
    });
  }

  render() {
    const {
      homeStore: {
        banner,
        personlizedList
      }
    } = this.props;
    const {
      loading,
      isRefreshing
    } = this.state;

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={this.handleRefresh}
            tintColor="#ff0000"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#d43c33']}
            progressBackgroundColor="#fff"
          />
        }
      >
        {
          !loading ?
          <View>
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
                    onPressIn={() => this.handlePress(item)}
                    width={width}
                    key={index}
                    playcount={item.playCount}
                    uri={item.picUrl}
                    title={item.name}
                  />
                ))
              }
            </View>
          </View> : <Text>{''}</Text>
        }
      </ScrollView>
    );
  }
}
