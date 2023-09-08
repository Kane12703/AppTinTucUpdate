import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilySetup} from '../../../../../utils/fonts';
import Color from '../../../../../assets/Color';

const styles = StyleSheet.create({
  textTab: {
    fontSize: 16,
    fontFamily: fontFamilySetup.light,
    fontWeight: '400',
    color: Color.text,
    lineHeight: 24,
    fontStyle: 'normal',
  },
  
});

export default styles;
