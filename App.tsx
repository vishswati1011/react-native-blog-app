import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnboardingProvider,
  OnboardingContext,
} from './context/onboardingContext';
import './ignoreWarnings';
import BottomTabBar from './navigator/bottomNavigation';
import OnboardingNavigation from './navigator/onboardingNavigation';
import AuthNavigation from './navigator/authNavigation';
import withScrollView from './withScrollView';
import {StatusBar} from 'react-native';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  const {currentStep} = useContext(OnboardingContext);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {currentStep > 4 ? (
          <>
            <Stack.Screen
              name="BottomTabBar"
              component={BottomTabBar}
              options={{headerShown: false}}
            />
          </>
        ) : currentStep > 3 && currentStep < 5 ? (
          <Stack.Screen
            name="AuthNavigation"
            component={withScrollView(AuthNavigation)}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="OnboardingNavigation"
            component={withScrollView(OnboardingNavigation)}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <OnboardingProvider>
      <StatusBar
        barStyle="dark-content" // Change to "light-content" for light text
        backgroundColor="#ffffff" // Change to your desired background color
      />
      <AppNavigator />
    </OnboardingProvider>
  );
}

export default App;
