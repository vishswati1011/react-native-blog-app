import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {postdata} from '../../utils/postImages';
import Icons from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../globalStyles';
import {blogdata} from '../../utils/blog';

export default function Chat({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.searchFeild}>
        <Icons name="search" size={20} color={colors.primary} />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View style={styles.follower}>
        <Text style={styles.postText}>Frequently chatted</Text>
        <ScrollView horizontal={true} style={styles.followerContainer}>
          {postdata.map((item, index) => (
            <Image
              key={index}
              source={item?.image}
              style={styles.followerImage}
              loadingIndicatorSource={require('../../assets/post/post1.png')} // Fallback image
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.users}>
        <Text style={styles.postText}>All Users</Text>
        <ScrollView style={styles.userContainer}>
          {blogdata.map((user, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChatScreen', {
                  user: user,
                })
              }
              key={index}>
              <View style={styles.userRow} key={index}>
                <Image
                  source={user?.image}
                  style={styles.userImage}
                  loadingIndicatorSource={require('../../assets/users/image1.jpeg')} // Fallback image
                />
                <View style={styles.userInfo}>
                  <Text style={styles.userText}>{user.username}</Text>
                  <Text style={styles.userText}>Abeokuta, Ogun</Text>
                </View>
                <View style={styles.status}>
                  <Text style={styles.date}>08:33</Text>
                  <View style={styles.unread}>
                    <Text style={styles.unreadText}>3</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  searchFeild: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
  },
  follower: {
    display: 'flex',
    padding: 10,
  },
  followerContainer: {
    overflowX: 'scroll',
    marginTop: 10,
    padding: 10,
  },
  followerImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  postText: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
  },
  users: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  userRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  userText: {
    fontSize: 16,
    color: colors.black,
  },
  status: {
    marginLeft: 'auto',
    display: 'column',
    alignItems: 'center',
  },
  date: {
    color: colors.grey,
    fontSize: 12,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  unread: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 15,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  unreadText: {
    color: colors.white,
    fontSize: 12,
  },
});
