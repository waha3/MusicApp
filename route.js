import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'antd-mobile';
import Base from './container/base.js';
import Home from './container/home.js';
import NavigatorBar from './component/tabbar.js';
import { LoginButton, LoginForm } from './container/login.js';

// class HeaderLeft extends Component {
//   componentDidMount() {
//     console.log(this.props);
//   }

//   render() {
//     return (
//       <View
//         style={{marginLeft: 20}}
//         >
//         <Icon
//           onPress={() => console.log(1111)}
//           type="left"
//           color="#fff"
//         />
//       </View>
//     );
//   }
// }

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
      },
      // headerLeft: (props) => <HeaderLeft {...props}/>
    }
  }
}, {
  initialRouteName: 'Base'
});

export default RootStack;