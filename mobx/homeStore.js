import { observable, action, runInAction } from 'mobx';
import Api from '../api.js';

const FEATCH_SUCCESS = 200;

export default class HomeStore {
  @observable banner = [];

  @action('get banner')
  getBannerAction = async () => {
    const res = await Api.getBanner();
    console.log(res)
    runInAction(() => {
      if (res.code == FEATCH_SUCCESS) {
        this.banner = [...res.banners];
      }
    })
    return res;
  }
}