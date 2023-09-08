import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hook/hookRedux';
import {useRoute} from '@react-navigation/native';
import {
  getNewByIdAuthor,
  setNewByIdAuthor,
} from '../../../app-redux/reducers/getDataNew';

const DetailAuthor = () => {
  const route = useRoute();
  const id = route.params.id;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getNewByIdAuthor({id: id}));
  }, []);

  const dataIdAuthor = useAppSelector(state => state.getDataNew.dataByIdAuthor);

  console.log(dataIdAuthor);

  return (
    <View>
      <Text>DetailAuthor</Text>
      <Text>{JSON.stringify(dataIdAuthor)}</Text>
    </View>
  );
};

export default DetailAuthor;

const styles = StyleSheet.create({});
