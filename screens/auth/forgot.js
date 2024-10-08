import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {styles} from './authStyle';
export default function Forgot({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>Forgot Password</Text>
        <Text style={globalStyles.subtitle}>
          Let &apos; s help recover your account
        </Text>
        <Text style={globalStyles.label}>Username</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Email</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Phone Number</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Last Remembered password</Text>
        <TextInput style={globalStyles.input} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            navigation.navigate('OtpScreen', {
              previousScreen: 'Forgot',
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
