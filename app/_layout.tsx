import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import FloatingNavbar from '../components/FloatingNavbar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_600SemiBold, 
  Poppins_700Bold, 
  Poppins_800ExtraBold 
} from '@expo-google-fonts/poppins';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
            animation: 'fade',
          }}
        />
        <FloatingNavbar />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    ...Platform.select({
      web: {
        height: '100vh',
        overflow: 'hidden',
      },
    }),
  },
});
