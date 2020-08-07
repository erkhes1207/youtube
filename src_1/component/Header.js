import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

export default function Header() {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const mycolor = colors.iconColor;
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => {
    return state.myDarkMode;
  });

  return (
    <View
      style={{
        height: 40,
        backgroundColor: colors.headerColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 8,
      }}>
      <View style={{flexDirection: 'row', margin: 5}}>
        <FontAwesome
          name="youtube-play"
          size={28}
          color="red"
          style={{marginLeft: 10}}
        />
        <Text
          style={{
            fontSize: 20,
            paddingLeft: 8,
            fontWeight: 'bold',
            color: `${mycolor}`,
          }}>
          Youtube
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 150,
          margin: 5,
        }}>
        <FontAwesome name="video-camera" size={28} color={mycolor} />
        <FontAwesome
          name="search"
          size={28}
          onPress={() => navigation.navigate('search')}
          color={mycolor}
        />
        <MaterialIcons
          name="account-circle"
          size={28}
          color={mycolor}
          onPress={() =>
            dispatch({type: 'change_theme', payload: !currentTheme})
          }
        />
      </View>
    </View>
  );
}
