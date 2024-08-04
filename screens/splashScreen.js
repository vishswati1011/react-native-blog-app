import React, {useEffect, useState} from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import Config from 'react-native-config';

const {width, height} = Dimensions.get('window');
const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    // Logic to determine which splash screen to show (e.g., based on environment)
    // const splashScreenImage =
    //   Config.ENV === 'development'
    //     ? require('./assets/splash_dev.png')
    //     : require('./assets/splash_prod.png');

    // Simulate loading time
    setTimeout(() => {
      setShowSplash(false);
      navigation.navigate('Onboarding1');
    }, 3000);
  }, [navigation]);

  const getRandomPosition = () => {
    const randomX = Math.random() * (width - 50);
    const randomY = Math.random() * (height - 50);
    return {top: randomY, left: randomX};
  };

  const circles = Array.from({length: 5}).map((_, index) => {
    const position = getRandomPosition();
    return (
      <View
        key={index}
        style={
          index % 2 == 0
            ? [styles.small_circle, position]
            : [styles.circle, position]
        }
      />
    );
  });

  return showSplash ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {circles}
      <View style={styles.centerDiv}>
        <Text style={styles.text}>Insta</Text>
      </View>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  centerDiv: {
    position: 'absolute',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  circle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#006175',
  },
  small_circle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#006175',
  },
});
export default SplashScreen;
