import React from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

const MiniCard = (props) => {
  const navigation = useNavigation();
  const {colors} = useTheme()
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoplayer', {
          videoId: props.videoId,
          title: props.title,
        })
      }>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: '50%',
            height: 100,
          }}
        />
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              fontSize: 17,
              width: Dimensions.get('screen').width / 2 - 10,
              color: colors.textColor
            }}
            ellipsizeMode="tail"
            numberOfLines={3}>
            {props.title}
          </Text>
          <Text style={{fontSize: 12, color: colors.textColor}}>{props.channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;
