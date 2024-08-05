import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {styles} from './authStyle';
export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>Sign In</Text>
        <Text style={globalStyles.subtitle}>Enter your credentials</Text>
        <Text style={globalStyles.label}>Username</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Password</Text>
        <TextInput secureTextEntry={true} style={globalStyles.input} />
        <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            navigation.navigate('OtpScreen', {
              previousScreen: 'Login',
            })
          }>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signup_link}>
            Don't have an account?&nbsp;
            <Text style={styles.text}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
