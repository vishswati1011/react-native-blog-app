import React from 'react';
import {
  NativeBaseProvider,
  Center,
  Actionsheet,
  useDisclose,
} from 'native-base';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../globalStyles';
import Icons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {blogdata} from '../../utils/blog';

export default function Loungeuser() {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <NativeBaseProvider>
      <Center>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.createButton} onPress={onOpen}>
            <Text style={styles.createButtonText}>Create Lounge</Text>
          </TouchableOpacity>
        </View>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content style={styles.actionsheetContent}>
            <View style={styles.header}>
              <View style={styles.host}>
                <Image
                  source={require('../../assets/users/image1.jpeg')}
                  style={styles.imageCss}
                />
                <View style={styles.hostText}>
                  <Text style={styles.title}>Oyin Dolapo</Text>
                  <Text style={styles.label}>Host</Text>
                </View>
              </View>
              <View style={styles.iconDiv}>
                <View style={styles.micIcons}>
                  <TouchableOpacity style={styles.icon} onPress={onOpen}>
                    <Icons
                      name="microphone-slash"
                      size={20}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                  <Text style={styles.label}>Mic off</Text>
                </View>
                <View style={styles.micIcons}>
                  <TouchableOpacity style={styles.icon} onPress={onOpen}>
                    <MaterialIcons
                      name="record-circle-outline"
                      size={20}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                  <Text style={styles.label}>Record</Text>
                </View>
              </View>
            </View>
            <View style={styles.allUser}>
              <View style={styles.host_users}>
                {blogdata &&
                  blogdata.map(item => (
                    <View style={styles.host}>
                      <Image source={item.image} style={styles.imageCss} />
                      <View style={styles.hostText}>
                        <Text style={styles.title}>Dolapo</Text>
                        <Text style={styles.label}>Host</Text>
                      </View>
                    </View>
                  ))}
              </View>
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
  createButton: {
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  viewButton: {
    height: 50,
    width: '95%',
  },
  createButtonText: {
    color: colors.white,
  },
  label: {
    fontSize: 12,
    color: colors.gray,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  host: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  hostText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
    alignItems: 'left',
  },
  imageCss: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  iconDiv: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  micIcons: {
    flexDirection: 'column',
    marginLeft: 20,
    marginBottom: 10,
  },
  icon: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    padding: 5,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allUser: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  host_users: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
