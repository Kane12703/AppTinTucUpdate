import React from 'react';
import {View, Text, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import image from '../assets/images';
import {
  Home,
  DetailNew,
  ProfileUser,
  CreateNews,
  DetailAuthor,
  Bookmark,
} from '../screens/main/index';
import {
  CategoryBar,
  News,
  NewTrending,
} from '../screens/main/Home/components/index';

import {
  HomeIcon,
  HomeActive,
  Explore,
  ExploreActive,
  Profile,
  ProfileActive,
  BookmarkIcon,
  BookmarkActive,
} from '../assets/icons/index';
import {useAppSelector} from '../hook/hookRedux';
import {generateStyles} from '../utils/thems';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const configTab = route => {
  return {
    tabBarIcon: ({focused, color, size}) => {
      if (route.name === 'Home') {
        if (focused) {
          return <HomeActive />;
        } else {
          return <HomeIcon />;
        }
      } else if (route.name === 'Explore') {
        if (focused) {
          return <ExploreActive />;
        } else {
          return <Explore />;
        }
      } else if (route.name === 'BookMark') {
        if (focused) {
          return <BookmarkActive />;
        } else {
          return <BookmarkIcon />;
        }
      } else {
        if (focused) {
          return <ProfileActive />;
        } else {
          return <Profile />;
        }
      }
    },
    headerShown: false,
  };
};

const NewsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeStackScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DetailNew"
        component={DetailNew}
      />
      <Stack.Screen name="ProfileScreen" component={CreateNews} />
      <Stack.Screen name="DetailAuthor" component={DetailAuthor} />
    </Stack.Navigator>
  );
};

const HomeStackScreen = () => {
  //get mode
  const getMode = useAppSelector(state => state.modeReducer.darkMode);

  const {viewStyle, buttonStyle, textStyle, textTitleStyle} =
    generateStyles(getMode);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...configTab(route),
        tabBarStyle: viewStyle,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={CreateNews} />
      <Tab.Screen name="BookMark" component={Bookmark} />
      <Tab.Screen name="Profile" component={ProfileUser} />
    </Tab.Navigator>
  );
};

export default NewsNavigation;
