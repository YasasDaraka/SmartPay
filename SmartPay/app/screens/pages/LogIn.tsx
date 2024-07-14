import { Navigator, Stack, useNavigation, useRouter } from 'expo-router';
import React from 'react'
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';
const backgroundImage = require('../../../assets/images/bank.jpg');

export default function LogIn() {
  
  const router = useRouter();
  return (
    <ImageBackground source={backgroundImage} className='flex-1 justify-center items-center'>

      <Stack>
        <Stack.Screen
          name="screens/pages/Dashboard"
          options={{ headerShown: false }}
        />
      </Stack>
      <View className='flex justify-center w-full h-full'>
        <TouchableOpacity onPress={()=>{router.navigate("screens/pages/Dashboard")}} >
        <Text className={"text-center text-white font-bold text-[4.5vw] mt-10"}>Fogot Your PI</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
