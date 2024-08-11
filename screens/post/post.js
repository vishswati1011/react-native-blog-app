import React, {useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from 'react-native';
import Card from './card';
import {BlogContext} from '../../context/blog';

export default function Post() {
  const {blogs} = useContext(BlogContext);
  const renderItem = ({item}) => <Card item={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
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
