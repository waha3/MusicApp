import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { AsyncStorage } from 'react-native';
import ListView from '../component/listview.js';

@inject('myMusicStore')
@observer
export default class MyMusic extends Component {
  componentDidMount = async () => {
    const {
      myMusicStore: {
        getSongListAction
      }
    } = this.props;
    const uid = await AsyncStorage.getItem('@uid');
    await getSongListAction(uid);
  }

  render() {
    const {
      myMusicStore: {
        songList
      }
    } = this.props;

    return (
      <ListView
        list={songList}
      />
    );
  }
}
