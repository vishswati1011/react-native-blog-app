import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {colors} from '../../globalStyles';

export default function LoungeCard({item}) {
  return (
    <View style={styles.container} key={item.id}>
      <Text style={[styles.label, {color: colors.red}]}>Live</Text>
      <Text style={styles.title}>The Chrip app is live on App Store </Text>
      <View style={styles.viewer}>
        <View style={styles.imageDiv}>
          <Image
            source={require('../../assets/users/image1.jpeg')}
            style={styles.image}
          />
          <Image
            source={require('../../assets/users/image2.jpeg')}
            style={styles.image}
          />
          <Image
            source={require('../../assets/users/image3.jpeg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.label}>200k people listening</Text>
      </View>
      <Text style={styles.label}>Host Oylin Dolapo</Text>
      <View style={styles.speaker}>
        <Image
          source={require('../../assets/users/image4.jpeg')}
          style={styles.image}
        />
        <Text style={styles.speakerText}>Abdul is speaking</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: colors.green,
    borderRadius: 10,
    marginVertical: 10,
    margin: 20,
    gap: 5,
  },
  label: {
    fontSize: 12,
    color: colors.white,
  },
  title: {
    fontSize: 14,
    color: colors.white,
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10,
  },
  viewer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageDiv: {
    flexDirection: 'row',
    marginRight: 30,
  },
  host: {
    fontSize: 10,
    color: colors.white,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: -15,
  },
  speaker: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  speakerText: {
    fontSize: 12,
    color: colors.white,
  },
});
