import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebViewCom extends Component {
  render() {
    return (
      <WebView
        ref={webview => this.webview = webview}
        automaticallyAdjustContentInsets={false}
        source={{uri: this.state.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        decelerationRate="normal"
        onNavigationStateChange={this.onNavigationStateChange}
        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
        startInLoadingState={true}
        scalesPageToFit={this.state.scalesPageToFit}
      />
    );
  }
}