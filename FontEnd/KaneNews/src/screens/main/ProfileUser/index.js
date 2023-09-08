import {StyleSheet, Text, Switch, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '../../../hook/hookRedux';
import {generateStyles} from '../../../utils/thems';
import {changeAppMode} from '../../../app-redux/reducers/modeReducer';

const ProfileUser = () => {
  const dispatch = useAppDispatch();
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  const {viewStyle, buttonStyle, textStyle} = generateStyles(getMode);

  const handleModeToggle = () => {
    dispatch(changeAppMode({darkMode: !getMode}));
  };

  return (
    <View style={{flex: 1, ...viewStyle}}>
      <Text style={{...textStyle}}>ProfileUser</Text>
      <Switch
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => handleModeToggle()}
        value={getMode}
      />
    </View>
  );
};

export default ProfileUser;
