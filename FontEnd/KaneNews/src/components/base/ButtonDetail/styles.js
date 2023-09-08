import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilySetup} from '../../../utils/fonts';

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 16,
    fontFamily: fontFamilySetup.light,
    fontWeight: '400',
    lineHeight: 24,
    letterSpacing: 0.12,
    marginLeft: 4,
  },
});
export default styles;
