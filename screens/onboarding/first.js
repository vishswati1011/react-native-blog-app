import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {OnboardingContext} from '../../context/onboardingContext';
import {styles} from './onboardingStyle';

export default function Onboarding({navigation}) {
  const {setOnboardingCompleted} = useContext(OnboardingContext);
  const handleOnboarding = async () => {
    setOnboardingCompleted(4);
    navigation.navigate('Login');
  };
  const imagesdata = [
    {image: require('../../assets/first/image3.png'), left: 40, top: 50},
    {image: require('../../assets/first/image2.png'), left: 180, top: 40},
    {image: require('../../assets/first/image4.png'), left: 300, top: 100},
    {image: require('../../assets/first/image1.png'), left: 150, top: 330},
    {image: require('../../assets/first/image5.png'), left: 40, top: 200},
    {image: require('../../assets/first/image6.png'), left: 300, top: 200},
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
            source={require('../../assets/first/image7.png')}
            style={styles.center}
          />
        </View>
      </View>
      <View style={styles.buttonDiv}>
        <Text style={styles.title}>Connect with Friends and Family</Text>
        <Text style={styles.desc}>
          Connecting with Family and Friends provides a sense of belonging and
          security.
        </Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('Onboarding2')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => handleOnboarding()}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.signText}>
          Already have an account?{' '}
          <Text style={styles.primaryText} onPress={() => handleOnboarding()}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}
