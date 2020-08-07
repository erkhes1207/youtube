import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useTheme} from '@react-navigation/native';

const Card = (props) => {
  const {colors} = useTheme()
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoplayer', {
          videoId: props.videoId,
          title: props.title,
        })
      }>
      <View style={{flex: 1, margin: 5}}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`,
          }}
          style={{
            width: '100%',
            height: 200,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            margin: 5,
          }}>
          <MaterialIcons
            name="account-circle"
            size={38}
            style={{justifyContent: 'center'}}
            color={colors.textColor}
          />
          <View
            style={{
              marginLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                width: Dimensions.get('screen').width - 80,
                color: colors.textColor
              }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {props.title}
            </Text>
            <Text style={{color: colors.textColor}}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
