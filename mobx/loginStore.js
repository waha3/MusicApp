import { action } from 'mobx';
import Api from '../api.js';

export default class LoginStore {
  @action('登录')
  loginAction = async (phone, password) => {
    const res = await Api.login(phone, password);
    return res;
  }
}
