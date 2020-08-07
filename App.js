import React from 'react';
import {View, Text} from 'react-native';

import Home from './src_1/screens/Home';
import Search from './src_1/screens/Search';

import VideoPlayer from './src_1/screens/VideoPlayer';
import Explore from './src_1/screens/Explore';
import Subscribe from './src_1/screens/Subscribe';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/* redux */
import {Provider, useSelector} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer} from './src_1/reducer/reducer';
import {themeReducer} from './src_1/reducer/themeReducer';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white',
    textColor: 'white',
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIcon: 'red',
  },
};

const rootReducer = combineReducers({
  cardData: reducer, //[]
  myDarkMode: themeReducer, //false
});

const store = createStore(rootReducer);

const RootHome = () => {
  const {colors} = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = 'explore';
          } else if (route.name === 'subscribe') {
            iconName = 'subscriptions';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.tabIcon,
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  );
};
export default () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export function Navigation() {
  let currentTheme = useSelector((state) => {
    return state.myDarkMode;
  });
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={currentTheme ? customDarkTheme : customDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
