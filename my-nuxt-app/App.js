import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://mynuxtapp.pbsmokeup.in/' }}  // Replace with your deployed Nuxt app's URL
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}
