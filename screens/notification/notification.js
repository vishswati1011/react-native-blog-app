import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../globalStyles';

export default function Notification() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dateText}>Today</Text>
        <View style={styles.notificationContainer}>
          <Image
            source={require('../../assets/users/image1.jpeg')}
            style={styles.userImage}
          />
          <View style={styles.user}>
            <Text style={styles.notificationText}>Patrick Followed you</Text>
            <Text style={styles.notificationTime}>2 hours ago</Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image
            source={require('../../assets/users/image3.jpeg')}
            style={styles.userImage}
          />
          <View style={styles.user}>
            <Text style={styles.notificationText}>Segun Liked your photo</Text>
            <Text style={styles.notificationTime}>3 hours ago</Text>
          </View>
        </View>

        <View style={styles.notificationContainer}>
          <Image
            source={require('../../assets/users/image4.jpeg')}
            style={styles.userImage}
          />
          <View style={styles.user}>
            <Text style={styles.notificationText}>Mike Followed you</Text>
            <Text style={styles.notificationTime}>11:00 pm</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.dateText}>07 Aug 2024</Text>
        <View style={styles.notificationContainer}>
          <Image
            source={require('../../assets/users/image2.jpeg')}
            style={styles.userImage}
          />
          <View style={styles.user}>
            <Text style={styles.notificationText}>Chris Followed you</Text>
            <Text style={styles.notificationTime}>10:00 am</Text>
          </View>
        </View>

        <View style={styles.notificationContainer}>
          <Image
            source={require('../../assets/users/image4.jpeg')}
            style={styles.userImage}
          />
          <View style={styles.user}>
            <Text style={styles.notificationText}>Segun Followed you</Text>
            <Text style={styles.notificationTime}>11:00 pm</Text>
          </View>
        </View>
        <View style={styles.notificationContainer}>
          <Image
            source={require('../../assets/users/image1.jpeg')}
            style={styles.userImage}
          />
          <View style={styles.user}>
            <Text style={styles.notificationText}>Patrick Followed you</Text>
            <Text style={styles.notificationTime}>2:00 pm</Text>
          </View>
        </View>
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
  dateText: {
    fontSize: 20,
    color: colors.black,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: colors.white,
  },
  user: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  notificationText: {
    fontSize: 16,
    color: colors.black,
  },
  notificationTime: {
    fontSize: 14,
    color: colors.gray,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});
