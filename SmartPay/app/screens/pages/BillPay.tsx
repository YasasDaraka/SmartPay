import React from 'react'
import { View, StatusBar, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
const back = require('../../../assets/images/back.png');
const search = require('../../../assets/images/search.png');
const electric = require('../../../assets/images/electric.png');
const mobile = require('../../../assets/images/mobile.png');

export default function BillPay() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#FCB117" />
            <View className={"flex h-full w-full"}>
                <LinearGradient colors={['#FCB117', '#FFD700']}>
                    <View className='flex flex-row h-20 w-full justify-center items-center '>
                        <View className='flex justify-center items-center w-12 h-12 absolute left-2'>
                            <Image source={back} className='w-6 h-6 mt-2'></Image>
                        </View>
                        <Headline className='text-xl mt-2'>One-Time Bill Payment</Headline>
                        <View className='flex justify-center items-center w-12 h-12 absolute right-2'>
                            <Image source={search} className='w-6 h-6 mt-2'></Image>
                        </View>
                    </View>
                </LinearGradient>
                <View className='flex items-center h-full w-full bg-white'>
                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[22vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-14 h-14'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>Telecommunication</Headline>
                        </View>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}
