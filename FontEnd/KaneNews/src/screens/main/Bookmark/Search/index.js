import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import InputSearch from '../../../../components/base/InputSearch';
import {generateStyles} from '../../../../utils/thems';
import {useAppSelector} from '../../../../hook/hookRedux';
import NewsItem from '../../../../components/base/NewsItem';

const Search = props => {
  const [valueSearch, setValueSearch] = useState('');
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  //style mode
  const {viewStyle, textStyle, textTitleStyle} = generateStyles(getMode);
  const getSearch = useAppSelector(
    state => state.getDataNew.dataSearchByName.products,
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
    <View>
      <InputSearch value={valueSearch} setValue={setValueSearch} />
      <FlatList
        data={getSearch}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        scrollEnabled={false}
      />
    </View>
  );
};

export default Search;
