import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import styles from './styles';
import {HearActive, Comment} from '../../../assets/icons';
import {Button} from '@rneui/themed';
import {generateStyles} from '../../../utils/thems';
import {useAppSelector} from '../../../hook/hookRedux';

const ButtonDetail = () => {
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  const {viewStyle, textStyle, textTitleStyle} = generateStyles(getMode);
  return (
    <View style={styles.btnContainer}>
      <Button
        buttonStyle={{width: 60}}
        type="clear"
        icon={<HearActive />}
        title="24.5"
        titleStyle={[styles.textBtn, textTitleStyle]}
      />
      <Button
        buttonStyle={{width: 60}}
        type="clear"
        icon={<Comment />}
        title="1k"
        titleStyle={[styles.textBtn, textTitleStyle]}
      />
    </View>
  );
};

export default ButtonDetail;
