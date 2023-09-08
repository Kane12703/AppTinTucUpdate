import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hook/hookRedux';
import {generateStyles} from '../../../utils/thems';
import styles from './styles';

import {
  getAllCategory,
  getAllNew,
  getByCategory,
  getNewTrending,
} from '../../../app-redux/reducers/getDataNew';
import InputSearch from '../../../components/base/InputSearch';
import Header from '../../../components/base/Header';
import CategoryBar from './components/CategoryBar';
import NewTrending from './components/NewTrending';

const Home = props => {
  const [valueSearch, setValueSearch] = useState('');
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getAllNew());
    dispatch(getNewTrending({id: '64dce9953381d1bfc7a74d7f'}));
  }, []);

  //mode
  const getMode = useAppSelector(state => state.modeReducer.darkMode);

  //style mode
  const {viewStyle, textStyle, textTitleStyle} = generateStyles(getMode);

  return (
    <View style={[styles.container, viewStyle]}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <InputSearch
          navigation={props.navigation}
          value={valueSearch}
          setValue={setValueSearch}
        />
        <View style={styles.labelNews}>
          <Text style={[styles.textLabel, textTitleStyle]}>Trending</Text>
          <TouchableOpacity>
            <Text style={[styles.textBtnLabel, textStyle]}>See all</Text>
          </TouchableOpacity>
        </View>
        <NewTrending navigation={props.navigation} />
        <View style={styles.labelNews}>
          <Text style={[styles.textLabel, textTitleStyle]}>Latest</Text>
          <TouchableOpacity>
            <Text style={[styles.textBtnLabel, textStyle]}>See all</Text>
          </TouchableOpacity>
        </View>
        <CategoryBar navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

export default Home;
