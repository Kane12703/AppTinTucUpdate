import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';

import {useAppDispatch, useAppSelector} from '../../../../../hook/hookRedux';
import {
  getAllCategory,
  getAllNew,
  getByCategory,
} from '../../../../../app-redux/reducers/getDataNew';
import News from '../NewsList';
import {generateStyles} from '../../../../../utils/thems';

const CategoryBar = props => {
  const dispatch = useAppDispatch();

  //mode
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  const {viewStyle, textStyle} = generateStyles(getMode);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const category = useAppSelector(state => state.getDataNew.dataCategory);

  const renderCategoryItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => handleTabPress(item, index)}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: index === selectedIndex ? 2 : 0,
        borderBottomColor: 'blue',
      }}>
      <Text style={[styles.textTab, textStyle]}>{item.name}</Text>
    </TouchableOpacity>
  );
  const handleTabPress = (category, newIndex) => {
    setSelectedIndex(newIndex);
    const selectedCategoryId = category._id;
    if (selectedCategoryId === 'all') {
      setSelectedCategory(null);
      dispatch(getAllNew());
    } else {
      setSelectedCategory(category);
      dispatch(getByCategory({id: selectedCategoryId}));
    }
  };
  return (
    <View>
      <View style={(styles.tabContainer, viewStyle)}>
        <FlatList
          nestedScrollEnabled
          data={[{_id: 'all', name: 'All'}, ...category]}
          renderItem={renderCategoryItem}
          keyExtractor={item => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <News navigation={props.navigation} valueSelecter={selectedCategory} />
    </View>
  );
};

export default CategoryBar;
