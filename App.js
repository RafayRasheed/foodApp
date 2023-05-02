import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, StatusBar, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { myColors } from './ultils/myColors';
import { myHeight, printWithPlat } from './components/common';

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
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.textOther}>Hello000000</Text>
        <Text>Hello</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={styles.containerButton}
        onPress={() => getMMKV()}>
        <Text style={styles.textOther}>Get MMKV</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.background,
    marginVertical: myHeight(50),
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
    color: myColors.background,
    fontWeight: 'bold',
  },
  textOther: {
    fontFamily: 'Roboto-Black',
  }
})