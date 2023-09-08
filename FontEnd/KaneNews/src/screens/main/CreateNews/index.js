import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hook/hookRedux';
import {generateStyles} from '../../../utils/thems';
import {getAllAuthor} from '../../../app-redux/reducers/getDataNew';

const CreateNews = props => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllAuthor());
  }, []);

  const dataAllAuthor = useAppSelector(
    state => state.getDataNew.dataAllAuthor.allAuthor,
  );

  const {navigation} = props;
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  console.log(getMode);
  const {viewStyle, buttonStyle, textStyle} = generateStyles(getMode);

  const renderItem = ({item}) => {
    const {name, _id, image} = item;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailAuthor', {id: _id})}>
        <Text>{_id}</Text>
        <Text>{image}</Text>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{...viewStyle, flex: 1}}>
      <Text style={{...textStyle}}>CreateNews</Text>
      {/* <Text>{JSON.stringify(dataAllAuthor)}</Text> */}
      <View>
        <View style={{height: 500}}>
          <FlatList
            data={dataAllAuthor}
            renderItem={renderItem}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('DetailAuthor')}>
        <Text>CHuyển</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateNews;
