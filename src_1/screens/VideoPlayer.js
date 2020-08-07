import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

const VideoPlayer = ({route}) => {
  const {videoId, title} = route.params;
  console.log('rouuuuut' + route);
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 350,
        }}>
        <WebView 
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{uri: `https://www.youtube.com/embed/${videoId}`}} />
        <Text
          style={{
            fontSize: 20,
            width: Dimensions.get('screen').width - 50,
            margin: 9,
          }}
          numberOfLines={2}
          ellipsizeMode="tail">
          {title}
        </Text>
        <View style={{borderBottomWidth: 1}} />
      </View>
    </View>
  );
};

export default VideoPlayer;
