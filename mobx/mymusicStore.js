import { observable, action, runInAction } from 'mobx';
import Api from '../api.js';

const FEATCH_SUCCESS = 200;

export default class MyMusicStore {
  @observable songList = [];

  @action('获取')
  getSongListAction = async (uid) => {
    const res = await Api.getSongList(uid);
    runInAction(() => {
      if (res.code === FEATCH_SUCCESS) {
        this.songList = [...res.playlist];
      }
    });
    return res;
  }
}
