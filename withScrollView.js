import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const withScrollView = Component => props =>
  (
    <ScrollView contentContainerStyle={styles.container}>
      <Component {...props} />
    </ScrollView>
  );

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default withScrollView;
