import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/login';
import ForgotScreen from '../screens/auth/forgot';
import OtpScreen from '../screens/auth/otp';
import NextOtp from '../screens/auth/nextOtp';
import WelcomeBack from '../screens/auth/welcomeBack';
import SignupScreen from '../screens/auth/signup';
import InfoScreen from '../screens/auth/infoScreen';
import InfoSecondScreen from '../screens/auth/infoSecondScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NextOtp"
        component={NextOtp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeBack"
        component={WelcomeBack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoSecondScreen"
        component={InfoSecondScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
