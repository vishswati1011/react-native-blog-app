import React from 'react';
import {View, Text, TextInput, TouchableOpacity, TextBase} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {styles} from './authStyle';
export default function Signup({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>Select a Username</Text>
        <Text style={globalStyles.subtitle}>Help secure your account</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Username</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Password</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Confirm Password</Text>
        <TextInput style={globalStyles.input} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            navigation.navigate('WelcomeBack', {
              previousScreen: 'InfoSecondScreen',
            })
          }>
          <Text style={styles.buttonText}>Done</Text>
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
