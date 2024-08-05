import {createContext, useState} from 'react';
const initialState = {
  currentStep: 0,
};

const OnboardingContext = createContext(initialState);

const OnboardingProvider = ({children}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const setOnboardingCompleted = async value => {
    setCurrentStep(value);
  };

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        setOnboardingCompleted,
      }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export {OnboardingProvider, OnboardingContext};
