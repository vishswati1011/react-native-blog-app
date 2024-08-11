import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../globalStyles';
import {styles} from './authStyle';
import PhoneInput from 'react-native-phone-number-input';

export default function Signup({navigation}) {
  const phoneInput = useRef(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(true);

  const handleSubmit = () => {
    const checkValid = phoneInput.current?.isValidNumber(value);
    setValid(checkValid ? checkValid : false);
    if (checkValid) {
      navigation.navigate('OtpScreen', {
        previousScreen: 'Signup',
      });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>Phone</Text>
        <Text style={globalStyles.subtitle}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={text => {
              if (text.length <= 10) {
                setValue(text);
              }
            }}
            onChangeFormattedText={text => {
              if (text.length <= 13) {
                setFormattedValue(text);
              }
            }}
            disabled={value.length == 10}
            maxLength={10}
            withDarkTheme
            withShadow
            autoFocus
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneInputTextContainer}
            textInputStyle={styles.phoneInputTextInput}
          />
        </Text>
        {!valid && (
          <Text style={{padding: 10, color: 'red'}}>Invalid number</Text>
        )}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() => handleSubmit()}>
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
