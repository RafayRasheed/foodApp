import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { myColors } from './ultils/myColors';

const storage = new MMKV()

export default function App() {
  console.log(`${Platform.OS} => Started Successfully`)
  useEffect(() => {
    storage.set("mberr", 'Hello')
    console.log("MMVK store successful? " + storage.contains('mberr'))
  }, [])
  function getMMVK() {
    const get = storage.getString('mberr')
    console.log(get)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Hello000000</Text>
        <Text>Hello</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.containerButton} onPress={() => getMMVK()}>
        <Text style={styles.textButton}>Button</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.background,
  },

  containerButton: {
    backgroundColor: myColors.primary,
    height: 40,
    width: 140,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: 'center',
  },

  textButton: {
    color: myColors.background
  },
})