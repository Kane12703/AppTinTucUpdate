import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontFamilySetup} from '../../../utils/fonts';

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontFamily: fontFamilySetup.medium,
    lineHeight: 48,
    letterSpacing: 0.12,
    marginBottom: 16,
  },
});
export default styles;
