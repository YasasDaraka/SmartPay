import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/back.png');
const search = require('../../../assets/images/search.png');
const electric = require('../../../assets/images/electric.png');
const mobile = require('../../../assets/images/mobile.png');

export default function FundTransfer() {

  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#FCB117" />
        <View className={"flex h-full w-full"}>
            <LinearGradient colors={['#FCB117', '#FFD700']}>
                <View className='flex flex-row h-20 w-full justify-center items-center '>
                    <View className='flex justify-center items-center w-12 h-12 absolute left-2'>
                    <TouchableOpacity onPress={() => { router.back() }} >
                        <Image source={back} className='w-6 h-6 mt-2'></Image>
                        </TouchableOpacity>
                    </View>
                    <Headline className='text-xl mt-2'>Fund Transfer</Headline>
                    
                </View>
            </LinearGradient>

            <View className='flex items-center h-full w-full bg-white'>
                
            </View>

        </View>
    </SafeAreaView>
)
}
