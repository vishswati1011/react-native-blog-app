import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {OnboardingContext} from '../../context/onboardingContext';
import {styles} from './onboardingStyle';
export default function Onboarding({navigation}) {
  const {setOnboardingCompleted} = useContext(OnboardingContext);
  const handleOnboarding = async () => {
    setOnboardingCompleted(4);
    navigation.navigate('Login');
  };
  const handleBack = async () => {
    setOnboardingCompleted(2);
    navigation.navigate('Onboarding2');
  };
  const imagesdata = [
    {image: require('../../assets/third/image3.png'), left: 40, top: 50},
    {image: require('../../assets/third/image2.png'), left: 180, top: 40},
    {image: require('../../assets/third/image4.png'), left: 300, top: 100},
    {image: require('../../assets/third/image1.png'), left: 150, top: 330},
    {image: require('../../assets/third/image5.png'), left: 40, top: 200},
    {image: require('../../assets/third/image6.png'), left: 300, top: 200},
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
            source={require('../../assets/third/image7.png')}
            style={styles.center}
          />
        </View>
      </View>
      <View style={styles.buttonDiv}>
        <Text style={styles.title}>Express yourself to the world</Text>
        <Text style={styles.desc}>
          Let your voice be heard on the internet through the OFOFO features on
          the App without restrictions
        </Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => handleOnboarding()}>
          <Text style={styles.nextButtonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => handleBack()}>
          <Text style={styles.skipButtonText}>Back</Text>
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
