import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native';

export default function App() {
  console.log(`${Platform.OS} => Started Successfully`)
  return (
    <SafeAreaView
      style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}
