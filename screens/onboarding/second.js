import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
export default function Onboarding({navigation}) {
  const imagesdata = [
    {image: require('../../assets/second/image3.png'), left: 40, top: 50},
    {image: require('../../assets/second/image2.png'), left: 180, top: 40},
    {image: require('../../assets/second/image4.png'), left: 300, top: 100},
    {image: require('../../assets/second/image1.png'), left: 150, top: 330},
    {image: require('../../assets/second/image5.png'), left: 40, top: 200},
    {image: require('../../assets/second/image6.png'), left: 300, top: 200},
  ];

  const images = imagesdata.map((item, index) => {
    const position = {top: item.top, left: item.left};
    return (
      <View
        key={index}
        style={
          index % 2 == 0
            ? [styles.small_circle, position]
            : [styles.circle, position]
        }>
        <Image
          source={item.image}
          style={index % 2 == 0 ? [styles.small_image] : [styles.image]}
        />
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.imageDiv}>
        {images}
        <View style={styles.centerDiv}>
          <Image
            source={require('../../assets/second/image7.png')}
            style={styles.center}
          />
        </View>
      </View>
      <View style={styles.buttonDiv}>
        <Text style={styles.title}>Make new friends with ease</Text>
        <Text style={styles.desc}>
          Allowing you to make new Friends is our Number one priority.....
        </Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Onboarding3')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.signText}>
          Already have an account?{' '}
          <Text
            style={{color: '#C4C4C4'}}
            onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageDiv: {
    height: '60%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDiv: {
    height: '40%',
    justifyContent: 'left',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  signText: {
    fontSize: 14,
    color: 'black',
    padding: 10,
    textAlign: 'center',
  },
  desc: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'medium',
    padding: 10,
  },
  nextButton: {
    backgroundColor: '#006175',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  skipButton: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  skipButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#006175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  small_circle: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: '#DBE9EC',
  },
  small_image: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  centerDiv: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBE9EC',
    borderRadius: 100,
    width: 150,
    height: 150,
  },
  center: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
