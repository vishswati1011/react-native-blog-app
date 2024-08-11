import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
import {colors, globalStyles} from '../../globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

import PhoneInput from 'react-native-phone-number-input';
export default function InfoScreen({navigation}) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [gender, setGender] = useState('');
  const phoneInput = useRef(null);
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          source={require('../../assets/users/image1.jpeg')}
          style={styles.userImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userText}>Oyin Dolapo</Text>
          <Text style={styles.userText}>Abeokuta, Ogun</Text>
        </View>
      </View>
      <View style={styles.topContainer}>
        <Text style={globalStyles.label}>Username</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Region</Text>
        <TextInput style={globalStyles.input} />
        <Text style={globalStyles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={showDatepicker}>
          <TextInput
            style={globalStyles.input}
            placeholder="Select date"
            value={date.toLocaleDateString()}
            editable={false}
          />
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}
        <Text style={globalStyles.label}>Phone Number</Text>
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
          // autoFocus
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.phoneInputTextContainer}
          textInputStyle={styles.phoneInputTextInput}
        />
        <View style={styles.dateGender}>
          <View style={styles.date}>
            <Text style={globalStyles.label}>Age</Text>

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
        <TouchableOpacity
          style={globalStyles.buttonStyle}
          onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    flex: 1,
    backgroundColor: colors.white,
  },
  topContainer: {
    flex: 1,
    padding: 10,
  },

  user: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userInfo: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  userText: {
    fontSize: 16,
    color: colors.black,
  },
  dateGender: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    flex: 1,
  },
  gender: {
    flex: 1,
  },
  phoneInputContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft: 10,
    height: 40,
    width: '95%',
    color: colors.black,
    backgroundColor: colors.secondary,
  },
  phoneInputTextContainer: {
    backgroundColor: colors.secondary,
    color: 'black',
  },
  phoneInputTextInput: {
    height: 40,
    color: 'black',
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
});
