import React from 'react';
import {View, Text, TextInput, TouchableOpacity, TextBase} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {styles} from './authStyle';
export default function InfoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>Personal Information</Text>
        <Text style={globalStyles.subtitle}>Please fill the following</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Full name</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Email Address</Text>
        <TextInput style={globalStyles.input} />
        <View style={styles.dateGender}>
          <View style={styles.date}>
            <Text style={globalStyles.label}>Date of Birth</Text>
            <TextInput style={globalStyles.input} />
          </View>
          <View style={styles.gender}>
            <Text style={globalStyles.label}>Gender</Text>
            <TextInput style={globalStyles.input} />
          </View>
        </View>
        <Text style={globalStyles.label}>About</Text>
        <TextInput
          style={[globalStyles.input, {height: 100, textAlignVertical: 'top'}]}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() =>
            navigation.navigate('InfoSecondScreen', {
              previousScreen: 'InfoSecondScreen',
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
