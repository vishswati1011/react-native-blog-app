import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding1 from '../screens/onboarding/first';
import Onboarding2 from '../screens/onboarding/second';
import Onboarding3 from '../screens/onboarding/third';
import SplashScreen from '../screens/splashScreen';
import LoginScreen from '../screens/auth/login';
const Stack = createNativeStackNavigator();

const OnboardingNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding1"
        component={Onboarding1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding2"
        component={Onboarding2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding3"
        component={Onboarding3}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
export default OnboardingNavigation;
