import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { myColors } from './ultils/myColors';
import { myHeight, printWithPlat } from './components/common';
import { StartupScreen } from './components/startup/startup_screens';

const storage = new MMKV()



export default function App() {

  useEffect(() => {
    printWithPlat('Started Successfully')
    storage.set("mberr", 'Hello')
    // printWithPlat("Is MMKV store successful? " + storage.contains('mberr'))
  }, [])

  function getMMKV() {
    // const get = storage.getString('mberr')
    // printWithPlat(get)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StartupScreen />
    </SafeAreaView>
  );
}

