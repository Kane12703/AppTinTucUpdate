import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Input} from '@rneui/themed';
import {SearchIcon, Fillter} from '../../assets/icons/index';
import styles from '../../screens/main/Home/styles';
import {generateStyles} from '../../utils/thems';
import {useAppDispatch, useAppSelector} from '../../hook/hookRedux';
import {getNewSearch} from '../../app-redux/reducers/getDataNew';

const InputSearch = ({value, setValue, navigation}) => {
  console.log(value);
  const dispatch = useAppDispatch();
  //mode
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  //style mode
  const {viewStyle, textStyle, textTitleStyle} = generateStyles(getMode);
  const handleSearchPress = () => {
    // navigation.navigate('BookMark');
    dispatch(getNewSearch({title: value}));
  };
  return (
    <Input
      placeholder="Search"
      leftIcon={
        <TouchableOpacity onPress={handleSearchPress}>
          <SearchIcon />
        </TouchableOpacity>
      }
      inputContainerStyle={styles.searchContainer}
      rightIcon={<Fillter />}
      inputStyle={(styles.textInput, textTitleStyle)}
      value={value}
      onChangeText={setValue}
    />
  );
};

export default InputSearch;
