import { observable, action, runInAction } from 'mobx';
import Api from '../api.js';

const FEATCH_SUCCESS = 200;

export default class HomeStore {
  @observable banner = [];
  @observable personlizedList = [];

  @action('get banner')
  getBannerAction = async () => {
    const res = await Api.getBanner();
    runInAction(() => {
      if (res.code == FEATCH_SUCCESS) {
        this.banner = [...res.banners];
      }
    })
    return res;
  }

  @action('获取推荐歌单')
  getPersonlizedListAction = async () => {
    const res = await Api.getPersonlizedList();
    runInAction(() => {
      if (res.code === FEATCH_SUCCESS) {
        this.personlizedList = [...res.result];
      }
    });
    return res;
  }
}
