import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import View from 'react-native';

export default class YoutubePlayer extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width ? this.props.width : 240,
          height: this.props.height ? this.props.height : 170,
          ...this.props.style,
        }}>
        <WebView
          style={{flex: 1}}
          javaScriptEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/${
              this.props.videoId
            }?rel=0&autoplay=${this.props.autoplay ? 1 : 0}&showinfo=${
              this.props.showinfo ? 1 : 0
            }&controls=${this.props.showControls ? 1 : 0}`,
          }}
        />
      </View>
    );
  }
}
