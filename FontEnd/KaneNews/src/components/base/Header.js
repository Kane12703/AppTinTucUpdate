import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../screens/main/Home/styles';
import {Ring, Logo} from '../../assets/icons/index';

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo />
      <TouchableOpacity>
        <Ring />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
