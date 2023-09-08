import {
  Image,
  Text,
  TextInput,
  View,
  CheckBox,
  Touchable,
  TouchableOpacity,
  Button,
  Pressable,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import styles from './styles';
import icon from '../../../assets/icon';
import {useAppDispatch} from '../../../hook/hookRedux';
import {login} from '../../../app-redux/reducers/userSlice';

const Login = props => {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Xin mời nhập vào email và password!!');
    }
    dispatch(
      login({
        email,
        password,
      }),
    );
    console.log('login->>>>', email, password);
  };

  return (
    <View style={styles.containerLogin}>
      <View style={styles.headerLogin}>
        <View style={styles.textHeader}>
          <Text style={styles.textHeader1}>Hello</Text>
          <Text style={styles.textHeader2}>Again!</Text>
        </View>
        <Text style={styles.textHeaderBody}>
          Welcome back you’ve been missed
        </Text>
      </View>
      <View style={styles.bodyLogin}>
        <View style={styles.inputBody1}>
          <Text style={styles.text}>Username*</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputBody2}>
          <Text style={styles.text}>Password*</Text>
          <View style={styles.inputContainer}>
            <TextInput
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <Image source={icon.password} style={styles.inputIcon} />
          </View>
        </View>
      </View>
      <View>
        <View style={styles.suggest}>
          <Text style={styles.text}>Remember me</Text>
          <Text style={[styles.text, styles.textForgot]}>
            Forgot the password ?
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.btnLogin}>
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      <View style={styles.textContinue}>
        <Text style={styles.text}>or continue with</Text>
      </View>
      <View style={styles.loginMore}>
        <TouchableOpacity style={styles.loginOther}>
          <View style={styles.iconLoginOther}>
            <Image source={icon.fb} />
          </View>
          <Text style={styles.textOther}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginOther}>
          <View style={styles.iconLoginOther}>
            <Image source={icon.gg} />
          </View>
          <Text style={styles.textOther}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textBottom}>
        <Text style={styles.text}>don’t have an account ? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.text, styles.textPrimary]}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
