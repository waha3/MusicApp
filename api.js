const host = 'http://104.224.160.73:3000';
const uid = '42783694';

const request = async (path) =>  {
  const res = await fetch(path);
  const json = await res.json();
  return json;
};

const queryString = (...data) => (...args) => data.map((item, index) => `${item}=${args[index]}`).join('&')

export default class Api {
  static getBanner() {
    return request(`${host}/banner`);
  }

  static login(phone, password) {
    const func = queryString('phone', 'password');
    return request(`${host}/login/cellphone?${func(phone, password)}`);
  }
}