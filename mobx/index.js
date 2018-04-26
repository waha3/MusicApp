import HomeStore from './homeStore.js';
import LoginStore from './loginStore.js';

const store = {
  homeStore: new HomeStore(),
  loginStore: new LoginStore()
}

export default store;