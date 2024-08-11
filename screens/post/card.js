import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {colors} from '../../globalStyles';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {BlogContext} from '../../context/blog';
export default function Card({item}) {
  const navigation = useNavigation();
  const {likeBlog} = useContext(BlogContext);
  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('userProfile', {
            user: item,
          })
        }>
        <View style={styles.userProfile}>
          <Image
            source={item?.image}
            style={styles.userImage}
            loadingIndicatorSource={require('../../assets/users/image1.jpeg')} // Fallback image
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{item?.username}</Text>
            <Text style={styles.postTime}>{item?.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{item?.title}</Text>
      <View style={styles.postContainer}>
        <Image
          source={item?.postImage}
          style={styles.postImage}
          loadingIndicatorSource={require('../../assets/first/image7.png')} // Fallback image
        />
      </View>
      <View style={styles.description}>
        <Text style={styles.descText}>{item?.desc}</Text>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => likeBlog(item.id)}>
          {/* <Icons name="heart" size={20} color={colors.red} /> */}
          <Text>{item?.likecount}</Text>
          <Icons name="heart-o" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Comment', {
              blog: item,
            })
          }>
          <Text>{item?.commentcount}</Text>
          <Icons name="comment" size={20} color={colors.primary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icons name="share-alt" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: colors.white,
    boxShadow: '0px 0px 10px rgba(0,0,0,0.21)',
    borderColor: colors.primary,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
  },
  userProfile: {
    flexDirection: 'row',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  userInfo: {
    marginLeft: 10,
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: 10,
  },
  postTime: {
    color: colors.grey,
  },
  postContainer: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  description: {
    paddingHorizontal: 10,
    marginVertical: 10,
    minHeight: 50,
  },
  descText: {
    color: colors.black,
    fontWeight: '400',
    fontSize: 14,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
