import { Navigator, Stack, useNavigation, useRouter } from 'expo-router';
import React from 'react'
import { Image, ImageBackground, View, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const backgroundImage = require('../../../assets/images/bank.jpg');
const back = require('../../../assets/images/back.png');
const smartpay = require('../../../assets/images/smartpay.png');
export default function LogIn() {

  const router = useRouter();
  return (
    <View className='flex-1 justify-center items-center bg-[#222222]'>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <SafeAreaView style={{ flex: 1 }}>
        <View className='flex justify-center items-center w-full h-full'>
          <View>
          <Image source={smartpay} className='h-[30vw] w-[65vw] mr-6 mb-10'></Image>
          </View>
          <TouchableOpacity className='absolute bottom-20' onPress={() => { router.navigate("screens/pages/Dashboard") }} >
            <View className={"flex justify-center items-center bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}>
              <Image source={back} className='h-3/6 w-3/6 rotate-90'></Image>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
