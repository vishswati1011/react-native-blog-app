import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../globalStyles';
import Icons from 'react-native-vector-icons/Feather';
import {postdata} from '../../utils/postImages';
import {Divider, NativeBaseProvider, Box, Flex} from 'native-base';
export default function Profile({navigation}) {
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
        <Icons name="settings" size={20} style={styles.settingIcon} />
      </View>
      <Text style={styles.decs}>
        {' '}
        I am a positive person, i love to traval and eat Always available for
        chat, feel free to message me.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('EditProfile')}
        style={styles.editProfile}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <NativeBaseProvider>
          <Box alignItems="center">
            <Flex direction="row" h="100" p="4">
              <View style={styles.section}>
                <Text style={styles.userText}>87</Text>
                <Text style={styles.userText}>Posts</Text>
              </View>
              <Divider
                bg="emerald.500"
                thickness="2"
                mx="2"
                orientation="vertical"
              />
              <View style={styles.section}>
                <Text style={styles.userText}>870</Text>
                <Text style={styles.userText}>Following</Text>
              </View>
              <Divider
                bg="indigo.500"
                thickness="2"
                mx="2"
                orientation="vertical"
              />
              <View style={styles.section}>
                <Text style={styles.userText}>15k</Text>
                <Text style={styles.userText}>followers</Text>
              </View>
            </Flex>
          </Box>
        </NativeBaseProvider>
      </View>
      <View style={styles.post}>
        <Text style={styles.postText}>Posts</Text>
        <View style={styles.postContainer}>
          {postdata.map((item, index) => (
            <Image
              key={index}
              source={item?.image}
              style={styles.postImage}
              loadingIndicatorSource={require('../../assets/post/post1.png')} // Fallback image
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    flexGrow: 1,
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
  settingIcon: {
    marginLeft: 'auto',
    color: colors.gray,
  },
  decs: {
    marginVertical: 10,
    color: colors.black,
    padding: 10,
  },
  editProfile: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  editText: {
    color: colors.white,
    textAlign: 'center',
  },
  divider: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  post: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10,
  },
  postText: {
    fontSize: 16,
    color: colors.black,
  },
  postContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 10,
  },
  postImage: {
    width: 110,
    height: 110,
    borderRadius: 5,
  },
});
