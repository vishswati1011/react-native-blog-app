import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {styles} from './authStyle';
export default function OtpScreen({route, navigation}) {
  const {previousScreen} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>OTP sent</Text>
        <Text style={globalStyles.subtitle}>Enter the OTP sent to you</Text>
        <View style={styles.otpFeild}>
          <TextInput style={styles.input} maxLength={1} />

          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
          <TextInput style={styles.input} maxLength={1} />
        </View>

        <Text style={styles.resendLink}>
          Didn't receive any code?&nbsp;
          <Text style={styles.resendText}>Resend in 01:00</Text>
        </Text>
      </View>
      {previousScreen === 'Signup' ? (
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={globalStyles.buttonStyle}
            onPress={() => navigation.navigate('InfoScreen')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signup_link}>
              Already have an account?&nbsp;
              <Text style={styles.text}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={globalStyles.buttonStyle}
            onPress={() => navigation.navigate('NextOtp')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signup_link}>
              Don't have an account?&nbsp;
              <Text style={styles.text}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
