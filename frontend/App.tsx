import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInSignUp from './src/pages/SignInSignUp';
import SignIn from './src/pages/SignIn';
import { useFonts, FjallaOne_400Regular } from '@expo-google-fonts/fjalla-one';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    FjallaOne_400Regular,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return <SignInSignUp />;
}
