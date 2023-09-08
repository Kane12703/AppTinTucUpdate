import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilySetup} from '../../../utils/fonts';
import Color from '../../../assets/Color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  textTab: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchContainer: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 6,
    height: 48,
    width: '100%',
    paddingHorizontal: 10,
  },
  textLabel: {
    fontFamily: fontFamilySetup.light,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 24,
    letterSpacing: 0.12,
  },
  labelNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 5,
  },
  textBtnLabel: {
    fontFamily: fontFamilySetup.light,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: 0.12,
  },

  textInput: {
    fontSize: 16,
  },
});
export default styles;
