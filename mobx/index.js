import HomeStore from './homeStore.js';
import LoginStore from './loginStore.js';
import MyMusicStore from './mymusicStore.js';

const store = {
  homeStore: new HomeStore(),
  loginStore: new LoginStore(),
  myMusicStore: new MyMusicStore()
};

export default store;
