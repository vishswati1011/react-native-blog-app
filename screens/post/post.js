import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from 'react-native';
import Card from './card';
import {blogdata} from '../../utils/blog';

export default function Post() {
  const renderItem = ({item}) => <Card item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={blogdata}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
