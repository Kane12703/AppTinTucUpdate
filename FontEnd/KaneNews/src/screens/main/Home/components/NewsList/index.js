import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAppSelector, useAppDispatch} from '../../../../../hook/hookRedux';
import {generateStyles} from '../../../../../utils/thems';
import {iconBookMark} from '../../../../../assets/images';
import {Time} from '../../../../../assets/icons';
import NewsItem from '../../../../../components/base/NewsItem';

const News = props => {
  //mode
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  //style mode
  const {viewStyle, textStyle, textTitleStyle} = generateStyles(getMode);
  //get all new
  const dataNewAll = useAppSelector(state => state.getDataNew.dataAll.products);
  //get all data by category
  const dataByCategory = useAppSelector(
    state => state.getDataNew.dataByCategory.products,
  );
  const handleItemPress = _id => {
    props.navigation.navigate('DetailNew', {id: _id});
  };

  const renderItem = ({item}) => {
    return (
      <NewsItem item={item} handleItemPress={() => handleItemPress(item._id)} />
    );
  };
  return (
    <View style={[styles.listNew, viewStyle]}>
      <FlatList
        data={props.valueSelecter === null ? dataNewAll : dataByCategory}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        scrollEnabled={false}
      />
    </View>
  );
};

export default News;
