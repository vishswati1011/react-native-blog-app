import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../globalStyles';
import Card from './post/card';

export default function Comment({route}) {
  const {blog} = route.params;
  return (
    <View style={styles.container}>
      <Card item={blog} />
      <View style={styles.notificationContainer}>
        <View style={styles.notification}>
          <Image
            source={require('../assets/users/image3.jpeg')}
            style={styles.userImage}
          />
          <View style={styles.userdate}>
            <Text style={styles.commentUser}>Segun</Text>
            <Text style={styles.commentTime}>2 hours ago</Text>
          </View>
        </View>
        <Text style={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
          suscipit porttitor in quis sagittis hac. Tellus sed ac libero
        </Text>
      </View>

      <View style={styles.notificationContainer}>
        <View style={styles.notification}>
          <Image
            source={require('../assets/users/image2.jpeg')}
            style={styles.userImage}
          />
          <View style={styles.userdate}>
            <Text style={styles.commentUser}>Melish </Text>
            <Text style={styles.commentTime}>2 hours ago</Text>
          </View>
        </View>
        <Text style={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
          aliquam, congue habitasse tortor. Fringilla nunc aliquam volutpat
          suscipit porttitor in quis sagittis hac. Tellus sed ac libero
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  userdate: {
    display: 'flex',
    flexDirection: 'column',
  },
  notificationContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.white,
  },
  notification: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  comment: {
    fontSize: 14,
    color: colors.grey,
  },
  commentUser: {
    fontSize: 16,
    color: colors.black,
  },
  commentTime: {
    fontSize: 14,
    color: colors.grey,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
