import { observable, action, runInAction, ObservableMap } from 'mobx';
import Api from '../api.js';

const FEATCH_SUCCESS = 200;

export default class AccountStore {
  @observable profile = new ObservableMap()

  @action('用户详情')
  getUserDetailAction = async (uid) => {
    const res = await Api.getUserDetail(uid);
    runInAction(() => {
      if (res.code === FEATCH_SUCCESS) {
        Object.keys(res.profile).map(key => {
          this.profile.set(key, res.profile[key]);
        });
      }
    });
    return res;
  }
}
