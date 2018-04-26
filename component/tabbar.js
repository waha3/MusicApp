import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, StatusBar } from 'react-native';
import { TabBar } from 'antd-mobile';
import Home from '../container/home.js';

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
				return <Home />
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
					tintColor="#33A3F4"
					barTintColor="#f0f0f0"
				>
					{
						tabList.map((item, index) => (
							<TabBar.Item
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