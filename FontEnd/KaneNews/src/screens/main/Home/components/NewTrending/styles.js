import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilySetup} from '../../../../../utils/fonts';

const styles = StyleSheet.create({
  trendingContainer: {
    padding: 8,
  },
  imgTrending: {
    width: '100%',
    height: 175,
    borderRadius: 6,
  },

  nameAuthor: {
    fontFamily: fontFamilySetup.light,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19.5,
  },
  textLight: {
    fontFamily: fontFamilySetup.light,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.5,
  },
  title: {
    fontFamily: fontFamilySetup.light,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    marginVertical  : 4,
  },
  imgAuthor: {
    height: 20,
    width: 20,
    borderRadius: 100,
    marginRight: 4,
  },
  authorContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
