import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Search from './Search';
import {useAppSelector} from '../../../hook/hookRedux';
import {generateStyles} from '../../../utils/thems';
import {Time} from '../../../assets/icons';
import NewsItem from '../../../components/base/NewsItem';
import {HeaderTextTab} from '../../../components/base';

const Bookmark = props => {
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  //style mode
  const {viewStyle, textStyle, textTitleStyle} = generateStyles(getMode);
  const getSearch = useAppSelector(
    state => state.getDataNew.dataSearchByName.products,
  );
  return (
    <View style={[styles.container, viewStyle]}>
      <HeaderTextTab textHeader={'BookMark'} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.newContainer}>
        <Search navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

export default Bookmark;
