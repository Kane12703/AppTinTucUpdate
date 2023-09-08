import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NewsNavigation from './NewsNavigation';
import UserNavigation from './UserNavigation';
import {isLogin} from '../app-redux/selectors/userSelector';
import {useAppDispatch, useAppSelector} from '../hook/hookRedux';

const AppNavigation = () => {
  const isLoggedIn = useAppSelector(state => state.user.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <NewsNavigation /> : <UserNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
