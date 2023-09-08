import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilySetup} from '../../../utils/fonts';

const styles = StyleSheet.create({
  newContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  imgNewContainer: {
    width: '30%',
    marginRight: '2%',
  },
  imgNew: {
    width: '100%',
    height: 90,
    borderRadius: 6,
  },
  textLight: {
    fontFamily: fontFamilySetup.light,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19.5,
  },
  titleNew: {
    fontFamily: fontFamilySetup.light,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
  nameAuthor: {
    fontFamily: fontFamilySetup.light,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 19.5,
  },

  imgAuthor: {
    height: 20,
    width: 20,
    borderRadius: 100,
    marginRight: 4,
  },
  authorContent: {
    flexDirection: 'row',
    marginLeft: 5,
    alignItems: 'center',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    width: '68%',
  },
});
export default styles;
