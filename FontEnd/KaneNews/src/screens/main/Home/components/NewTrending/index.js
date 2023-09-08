import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {useAppSelector} from '../../../../../hook/hookRedux';
import {generateStyles} from '../../../../../utils/thems';
import {Time} from '../../../../../assets/icons';
import {useDispatch} from 'react-redux';
import {getNewTrending} from '../../../../../app-redux/reducers/getDataNew';

const NewTrending = props => {
  //mode
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  //style mode
  const {viewStyle, textStyle, textTitleStyle} = generateStyles(getMode);

  //get data treding
  const getDataTredingId = useAppSelector(
    state => state.getDataNew.dataTrending.products,
  );
  if (!getDataTredingId) {
    return null;
  }

  let imageAuthor = getDataTredingId.author?.image || '';
  let nameAuthor = getDataTredingId.author?.name || '';
  const handleItemPress = _id => {
    props.navigation.navigate('DetailNew', {id: _id});
  };

  return (
    <TouchableOpacity
      style={[styles.trendingContainer]}
      onPress={() => handleItemPress(getDataTredingId._id)}>
      <Image
        style={styles.imgTrending}
        source={{uri: getDataTredingId.image}}
      />
      <Text style={[styles.textLight, textStyle]}>Europe</Text>
      <Text style={[styles.title, textTitleStyle]}>
        {getDataTredingId.title}
      </Text>
      <View style={styles.authorContainer}>
        <View style={styles.authorContent}>
          <Image style={styles.imgAuthor} source={{uri: imageAuthor}} />
          <Text style={[styles.nameAuthor, textStyle]}>{nameAuthor}</Text>
        </View>
        <View style={styles.authorContent}>
          <Time />
          <Text style={[styles.textLight, textStyle]}>15m ago</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewTrending;
