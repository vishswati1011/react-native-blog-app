import React from 'react';
import {
  NativeBaseProvider,
  Center,
  Actionsheet,
  useDisclose,
} from 'native-base';
import LoungeUser from './loungeUser';
import Icons from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../globalStyles';

export default function NewLounge() {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <NativeBaseProvider>
      <Center>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.createButton} onPress={onOpen}>
            <Icons name="pie-chart" color={colors.white} size={20} />
          </TouchableOpacity>
        </View>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content style={styles.actionsheetContent}>
            <Text style={styles.title}>Create a Lounge</Text>
            <Text style={styles.label}>Name</Text>
            <TextInput placeholder="Enter Lounge Name" style={styles.input} />
            <Text style={styles.label}>Description</Text>
            <TextInput
              placeholder="Enter Lounge Description"
              style={styles.input}
            />
            <View style={styles.viewStyle}>
              <LoungeUser />
            </View>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  actionsheetContent: {
    width: '100%',
    alignItems: 'left',
    padding: 10,
  },
  viewStyle: {
    height: 45,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    padding: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: colors.black,
  },
  createButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  viewButton: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 10,
  },
  input: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    height: 40,
    backgroundColor: colors.secondary,
    width: '95%',
  },
  content: {
    width: '100%',
    padding: 10,
  },
});
