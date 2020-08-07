import React, {useState} from 'react';
import {View, TextInput, FlatList, ActivityIndicator} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniCard from '../component/MiniCard';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@react-navigation/native';

const Search = ({navigation}) => {
  const {colors} = useTheme();
  const mycolor = colors.iconColor;
  const [value, setValue] = useState('');
  // const [miniCardData, setMiniCard] = useState([])
  const dispatch = useDispatch();
  const miniCardData = useSelector((state) => {
    return state.cardData;
  });
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}&type=video&key=AIzaSyD_YB9CUxe7S-YkKWsHOptEAVN5v_PztZE`,
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        dispatch({type: 'add', payload: data.items});
        // setMiniCard(data.items)
      });
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 40,
          padding: 5,
          backgroundColor: colors.headerColor,
          elevation: 5,
        }}>
        <FontAwesome5
          style={{color: mycolor}}
          name="arrow-left"
          size={28}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={{width: '70%', backgroundColor: '#e6e6e6', maxHeight: 40, fontSize: 13}}
          value={value}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          style={{color: mycolor}}
          name="md-send"
          size={28}
          onPress={() => fetchData()}
        />
      </View>

      {loading ? (
        <ActivityIndicator style={{marginTop: 10}} size="large" color="red" />
      ) : null}
      <FlatList
        data={miniCardData}
        renderItem={({item}) => {
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
};

export default Search;
