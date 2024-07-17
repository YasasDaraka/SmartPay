import { Navigator, Stack, useNavigation, useRouter } from 'expo-router';
import React from 'react'
import { Text, ImageBackground, View, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const backgroundImage = require('../../../assets/images/bank.jpg');

export default function LogIn() {

  const router = useRouter();
  return (
    <ImageBackground source={backgroundImage} className='flex-1 justify-center items-center'>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <View className='flex justify-center w-full h-full'>
          <TouchableOpacity onPress={() => { router.navigate("screens/pages/Billers") }} >
            <Text className={"text-center text-white font-bold text-[4.5vw] mt-10"}>Fogot Your PI</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
