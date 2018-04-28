import { StackNavigator } from 'react-navigation';
import Base from './container/base.js';
import Home from './container/home.js';
import NavigatorBar from './component/tabbar.js';
import { LoginButton, LoginForm } from './container/login.js';
import Detail from './container/detail.js';

const RootStack = StackNavigator({
  Base: {
    screen: Base,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: NavigatorBar,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  LoginButton: {
    screen: LoginButton,
    navigationOptions: {
      header: null
    }
  },
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      title: '手机号登录',
      headerStyle: {
        backgroundColor: '#d43c33'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
      }
    },
    Detail: {
      sreen: Detail
    }
  }
}, {
  initialRouteName: 'Base'
});

export default RootStack;
