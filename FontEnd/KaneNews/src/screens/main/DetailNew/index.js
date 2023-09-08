import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hook/hookRedux';
import {generateStyles} from '../../../utils/thems';
import {useRoute} from '@react-navigation/native';
import {getNewById} from '../../../app-redux/reducers/getDataNew';
import styles from './styles';
import {ButtonDetail, CustomButton} from '../../../components/base';
import {BackLeft, SaveActive, Setting, Share} from '../../../assets/icons';

const DetailNew = props => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const id = route.params.id;
  console.log(id);
  useEffect(() => {
    dispatch(getNewById({id: id}));
  }, []);

  //

  //get mode
  const getMode = useAppSelector(state => state.modeReducer.darkMode);
  //style mode
  const {viewStyle, buttonStyle, textStyle, textTitleStyle} =
    generateStyles(getMode);

  //data new by id new
  const dataByIdNew = useAppSelector(
    state => state.getDataNew.dataById.products,
  );

  if (!dataByIdNew) {
    return null;
  }

  let imageAuthor = dataByIdNew.author?.image || '';
  let nameAuthor = dataByIdNew.author?.name || '';

  return (
    <View style={[styles.container, viewStyle]}>
      <View style={styles.navContainer}>
        <TouchableOpacity>
          <BackLeft />
        </TouchableOpacity>
        <View style={styles.navItem}>
          <TouchableOpacity>
            <Share />
          </TouchableOpacity>
          <TouchableOpacity>
            <Setting />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.newContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.rightItem}>
            <Image style={styles.imgAuthor} source={{uri: imageAuthor}} />
            <View>
              <Text style={[styles.textAuthor, textTitleStyle]}>
                {nameAuthor}
              </Text>
              <Text style={[styles.time, textStyle]}>14m ago</Text>
            </View>
          </View>
          <CustomButton
            titleBtn="Following"
            buttonStyles={styles.buttonStyles}
          />
        </View>
        <View style={styles.body}>
          <Image style={styles.imgNew} source={{uri: dataByIdNew.image}} />
          <Text style={[styles.textArea, textStyle]}>Europe</Text>
          <Text style={[styles.titleNew, textTitleStyle]}>
            {dataByIdNew.title}
          </Text>
          <Text style={[styles.content, textStyle]}>{dataByIdNew.content}</Text>
        </View>
      </ScrollView>
      <View style={[styles.bottom, viewStyle]}>
        <ButtonDetail />
        <TouchableOpacity>
          <SaveActive />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailNew;
