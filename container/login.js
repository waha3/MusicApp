import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { View, StyleSheet, Text } from 'react-native';
import { WhiteSpace, WingBlank, InputItem, Button, Toast } from 'antd-mobile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderColor: '#d43c33',
    borderWidth: 1,
    borderRadius: 20,
    height: 40
  },
  activeStyle: {
    backgroundColor: '#d43c33'
  },
  textStyle: {
    color: '#d43c33',
    fontSize: 16
  }
})

export class LoginButton extends Component {
  onButtonPressIn = () => {
    const {
      navigation: {
        navigate
      }
    } = this.props;

    navigate('LoginForm');
  }

  render() {
    return (
      <WingBlank style={styles.container}>
        <Button
          onPressIn={this.onButtonPressIn}
          style={styles.button}
          activeStyle={styles.activeStyle}
        >
          <Text style={styles.textStyle}>手机号登录</Text>
        </Button>
      </WingBlank>
    );
  }
}

@inject('loginStore')
@observer
export class LoginForm extends Component {
  state = {
    mobilephone: null,
    password: null
  }

  componentDidMount = () => {
    // this.mobilephoneInput.focus();
  }


  onButtonPress = async () => {
    const {
      loginStore: {
        loginAction
      },
      navigation: {
        navigate
      }
    } = this.props;
    const { password, mobilephone } = this.state;

    const res = await loginAction(mobilephone, password);

    if (res.code === 200) {
      navigate('Home');
    } else {
      Toast.fail('登录失败')
    }
  }

  handleChange(type, value) {
    console.log(type, value)
    switch (type) {
      case 'mobilephone':
        this.setState({
          mobilephone: value === '' ? null : value
        })
        break;
      case 'password':
        this.setState({
          password: value === '' ? null : value
        })
        break;
      default:
        break;
    }
  }

  render() {
    const { mobilephone, password } = this.state;
    return (
      <WingBlank>
        <WhiteSpace />
        <InputItem
          placeholder="手机号"
          ref={input => this.mobilephoneInput = input}
          onChange={(value) => this.handleChange('mobilephone', value)}
        />
        <InputItem
          type="password"
          placeholder="密码"
          onChange={(value) => this.handleChange('password', value)}
        />
        <WhiteSpace />
        <Button
          style={styles.button}
          onPressIn={this.onButtonPress}
          disabled={!(mobilephone && password)}
        >
          <Text style={styles.textStyle}>登录</Text>
        </Button>
      </WingBlank>
    );
  }
}