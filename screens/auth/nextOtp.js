import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {styles} from './authStyle';
export default function NextOtp({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>Pick a new Password</Text>
        <Text style={globalStyles.subtitle}>Help secure your account</Text>
        <Text style={globalStyles.label}>New Password</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Confirm new Password</Text>
        <TextInput secureTextEntry={true} style={globalStyles.input} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            navigation.navigate('WelcomeBack', {
              previousScreen: 'NextOtp',
            })
          }>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        <Text style={styles.signup_link}>
          Don't have an account?&nbsp;
          <Text style={styles.text}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}
