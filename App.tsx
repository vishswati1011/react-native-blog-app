import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding1 from './screens/onboarding/first';
import Onboarding2 from './screens/onboarding/second';
import Onboarding3 from './screens/onboarding/third';
import SplashScreen from './screens/splashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/login';

const Stack = createNativeStackNavigator();

function App() {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  const checkOnboardingCompleted = async () => {
    try {
      const value = await AsyncStorage.getItem('storage_Key');
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (e) {
      // Error retrieving data
    }
    return false;
  };

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await checkOnboardingCompleted();
      setOnboardingCompleted(completed);
    };
    checkOnboarding();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {onboardingCompleted ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding1}
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

export default App;
