import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding1 from './screens/onboarding/first';
import Onboarding2 from './screens/onboarding/second';
import Onboarding3 from './screens/onboarding/third';
import SplashScreen from './screens/splashScreen';
import LoginScreen from './screens/auth/login';
import ForgotScreen from './screens/auth/forgot';
import OtpScreen from './screens/auth/otp';
import {
  OnboardingProvider,
  OnboardingContext,
} from './context/onboardingContext';
import NextOtp from './screens/auth/nextOtp';
import WelcomeBack from './screens/auth/welcomeBack';
import SignupScreen from './screens/auth/signup';
import InfoScreen from './screens/auth/infoScreen';
import InfoSecondScreen from './screens/auth/infoSecondScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  const {currentStep} = useContext(OnboardingContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {currentStep > 3 ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <OnboardingProvider>
      <AppNavigator />
    </OnboardingProvider>
  );
}

export default App;
