import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {styles} from './authStyle';
export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>Phone</Text>
        <Text style={globalStyles.subtitle}>Enter your phone number</Text>
        <TextInput style={globalStyles.input} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            navigation.navigate('OtpScreen', {
              previousScreen: 'Signup',
            })
          }>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signup_link}>
            Already have an account?&nbsp;
            <Text style={styles.text}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
