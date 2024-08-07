import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {colors, globalStyles} from '../../globalStyles';
import {styles} from '../auth/authStyle';

export default function Post({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={globalStyles.title}>Select Image(s)</Text>
        <TextInput
          style={[globalStyles.input, {height: 100, textAlignVertical: 'top'}]}
          multiline={true}
          numberOfLines={4}
        />
        <Text style={globalStyles.label}>Add caption</Text>
        <TextInput
          style={[globalStyles.input, {height: 80, textAlignVertical: 'top'}]}
          multiline={true}
          numberOfLines={4}
        />
        <Text style={globalStyles.label}>Add hastags</Text>
        <TextInput style={globalStyles.input} />
        <TouchableOpacity
          style={postStyle.buttonStyle}
          onPress={() =>
            navigation.navigate('InfoSecondScreen', {
              previousScreen: 'InfoSecondScreen',
            })
          }>
          <Text style={postStyle.button}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const postStyle = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    color: colors.white,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    borderRadius: 5,
  },
  button: {
    color: colors.white,
  },
});
