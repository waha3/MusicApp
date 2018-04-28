import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, StatusBar } from 'react-native';
import { TabBar } from 'antd-mobile';
import { Text } from 'react-native';
import Home from '../container/home.js';
import MyMusic from '../container/mymusic.js';

@inject('homeStore')
@observer
export default class NavigatorBar extends Component {
  state = {
    selectedKey: '0',
    tabList: ['发现', '我的', '账号']
  }

  switchContent(index) {
    switch (index) {
      case '0':
        return <Home {...this.props}/>;
      case '1':
        return <MyMusic />;
      case '2':
        return <Text>111</Text>;
      default:
        break;
    }
  }

  handlePress(index) {
    this.setState({
      selectedKey: index
    });
  }

  render() {
    const {
      selectedKey,
      tabList
    } = this.state;

    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#d43c33"
          barStyle="light-content"
        />
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#d43c33"
          barTintColor="#f0f0f0"
        >
          {
            tabList.map((item, index) => (
              <TabBar.Item
                style={{backfaceVisibility: 'hidden'}}
                title={item}
                key={String(index)}
                selected={selectedKey === String(index) ? true : false}
                onPress={() => this.handlePress(String(index))}
              >
                {this.switchContent(String(index))}
              </TabBar.Item>
            ))
          }
        </TabBar>
      </View>
    );
  }
}
