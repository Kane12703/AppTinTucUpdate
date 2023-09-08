import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAppSelector} from '../../../hook/hookRedux';
import {generateStyles} from '../../../utils/thems';

const HeaderTextTab = ({textHeader}) => {
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  const {viewStyle, textStyle} = generateStyles(getMode);
  return <Text style={[styles.text, textStyle]}>{textHeader}</Text>;
};

export default HeaderTextTab;
