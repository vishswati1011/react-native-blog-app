import React from 'react';
import {View, StyleSheet, TextInput, Text, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../globalStyles';
import NewLounge from './newLounge';
import {blogdata} from '../../utils/blog';
import Card from '../lounge/loungeCard';

export default function LoungeScreen({navigation}) {
  const renderItem = ({item}) => <Card item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.searchFeild}>
        <Icons name="search" size={20} color={colors.primary} />
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Feeling bored?Join an Ofofo</Text>
          <Text style={styles.subTitle}>
            Selected based on your friends interest
          </Text>
        </View>
        <NewLounge />
      </View>
      <View style={styles.loungeDiv}>
        <FlatList
          data={blogdata}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
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
  create: {
    marginTop: 10,
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
  title: {
    fontSize: 14,
    color: colors.black,
    padding: 10,
  },
  subTitle: {
    fontSize: 12,
    color: colors.gray,
    paddingLeft: 10,
  },
  loungeicon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
