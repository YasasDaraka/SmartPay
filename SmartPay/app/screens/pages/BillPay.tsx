import React from 'react'
import { View, StatusBar, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
const back = require('../../../assets/images/back.png');
const search = require('../../../assets/images/search.png');
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
                <View className='flex h-full w-full bg-orange-600'></View>
            </View>
        </SafeAreaView>
    )
}
