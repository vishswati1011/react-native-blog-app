import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../globalStyles';
import Post from '../post/post';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchFeild}>
          <Icons name="search" size={20} color={colors.primary} />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons
            name="notifications-outline"
            size={20}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>
      <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  searchFeild: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 40,
    marginLeft: 10,
    // padding: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
  },
});
