/**
 * FlightsandFeelings - Airport Dating App
 * A real-time social dating app for airports
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthNavigator } from './src/components/AuthNavigator';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthNavigator />
    </SafeAreaProvider>
  );
}

export default App;
