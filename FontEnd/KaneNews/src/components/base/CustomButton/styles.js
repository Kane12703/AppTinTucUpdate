import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilySetup} from '../../../utils/fonts';
import Color from '../../../assets/Color';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  textButton: {
    fontFamily: fontFamilySetup.medium,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    fontSize: 16,
    color: '#FFF',
  },
});
export default styles;
