import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {useAppSelector} from '../../../hook/hookRedux';
import {generateStyles} from '../../../utils/thems';

const CustomButton = ({onPress, titleBtn, buttonStyles}) => {
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  const {viewStyle, textStyle} = generateStyles(getMode);
  return (
    <TouchableOpacity
      style={[buttonStyles, styles.buttonContainer]}
      onPress={onPress}>
      <Text style={styles.textButton}>{titleBtn}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
