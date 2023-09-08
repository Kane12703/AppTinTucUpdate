import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Home,
  DetailNew,
  ProfileUser,
  CreateNews,
} from './src/screens/main/index';
import {Login, Register} from './src/screens/auth/index';
import {Provider} from 'react-redux';
import store from './src/app-redux/store';

import AppNavigation from './src/navigation/AppNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
