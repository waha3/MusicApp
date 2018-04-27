import CookieManager from 'react-native-cookies';

const host = 'http://104.224.160.73:3000';

CookieManager.setFromResponse(
  host,
  'user_session=abcdefg; path=/; expires=Thu, 1 Jan 2030 00:00:00 -0000; secure; HttpOnly'
).then(res => console.log(res));

const request = async (path) =>  {
  const res = await fetch(path);
  const json = await res.json();
  return json;
};

const queryString = (...data) => (...args) => data.map((item, index) => `${item}=${args[index]}`).join('&');

export default class Api {
  static getBanner() {
    return request(`${host}/banner`);
  }

  static login(phone, password) {
    const func = queryString('phone', 'password');
    return request(`${host}/login/cellphone?${func(phone, password)}`);
  }

  static getPersonlizedList() {
    return request(`${host}/personalized`);
  }

  static getUserDetail(uid) {
    const func = queryString('uid');
    return request(`${host}/detail?${func(uid)}`);
  }
}

