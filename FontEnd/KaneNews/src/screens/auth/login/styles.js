import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../../assets/Color';

const styles = StyleSheet.create({
  containerLogin: {
    padding: 15,
  },
  textHeader1: {
    fontSize: 48,
    fontStyle: 'normal',
    lineHeight: 72,
    letterSpacing: 0.12,
    color: Color.textHeader,
    fontWeight: '700',
  },
  textHeader2: {
    fontSize: 48,
    fontStyle: 'normal',
    lineHeight: 72,
    letterSpacing: 0.12,
    color: Color.primary,
    fontWeight: '700',
  },
  textHeaderBody: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.12,
    width: 222,
    color: Color.text,
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0.12,
    color: Color.text,
    fontStyle: 'normal',
  },
  input: {
    padding: 10,
    backgroundColor: Color.backgroundInput,
    borderWidth: 1,
    borderColor: Color.colorBorderInput,
    borderStyle: 'solid',
    borderRadius: 6,
  },
  bodyLogin: {
    marginTop: 30,
  },
  suggest: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textForgot: {
    color: '#5890FF',
  },
  textContinue: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLoginOther: {
    paddingRight: 7,
  },
  loginOther: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.btnSocial,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  loginMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOther: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: Color.colorTextSocial,
  },
  textBottom: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPrimary: {
    color: Color.primary,
    fontWeight: '500',
  },
  btnLogin: {
    backgroundColor: Color.primary,
    paddingHorizontal: 24,
    paddingVertical: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: 0.12,
    color: Color.backgroundInput,
  },
  inputContainer: {
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    right: 8,
    top: 15,
  },
});
export default styles;
