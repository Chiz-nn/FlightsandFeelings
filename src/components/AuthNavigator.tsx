import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FirebaseService } from '../services/firebase';
import { PhoneAuthScreen } from '../screens/PhoneAuthScreen';
import { OTPVerificationScreen } from '../screens/OTPVerificationScreen';
import { ProfileSetupScreen } from '../screens/ProfileSetupScreen';
import { LandingScreen } from '../screens/LandingScreen';

type AuthStep = 'phone' | 'otp' | 'profile' | 'landing';

export const AuthNavigator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('phone');
  const [user, setUser] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = FirebaseService.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        
        const userProfile = await FirebaseService.getUserProfile(firebaseUser.uid);
        if (userProfile && userProfile.isProfileComplete) {
          setCurrentStep('landing');
        } else {
          setCurrentStep('profile');
        }
      } else {
        setUser(null);
        setCurrentStep('phone');
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleCodeSent = (verificationIdParam: string, phoneNumberParam: string) => {
    setVerificationId(verificationIdParam);
    setPhoneNumber(phoneNumberParam);
    setCurrentStep('otp');
  };

  const handleVerificationSuccess = (userParam: any) => {
    setUser(userParam);
    setCurrentStep('profile');
  };

  const handleProfileComplete = () => {
    setCurrentStep('landing');
  };

  const handleSignOut = () => {
    setUser(null);
    setCurrentStep('phone');
  };

  const handleGoBack = () => {
    setCurrentStep('phone');
  };

  if (isLoading) {
    return <View style={styles.container} />;
  }

  switch (currentStep) {
    case 'phone':
      return <PhoneAuthScreen onCodeSent={handleCodeSent} />;
    
    case 'otp':
      return (
        <OTPVerificationScreen
          phoneNumber={phoneNumber}
          verificationId={verificationId}
          onVerificationSuccess={handleVerificationSuccess}
          onGoBack={handleGoBack}
        />
      );
    
    case 'profile':
      return (
        <ProfileSetupScreen
          user={user}
          onProfileComplete={handleProfileComplete}
        />
      );
    
    case 'landing':
      return (
        <LandingScreen
          user={user}
          onSignOut={handleSignOut}
        />
      );
    
    default:
      return <PhoneAuthScreen onCodeSent={handleCodeSent} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
