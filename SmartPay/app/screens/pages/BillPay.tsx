import React from 'react'
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
export default function BillPay() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#FCB117" />
            <View className={"flex h-full w-full"}>
                <LinearGradient colors={['#FCB117', '#FFD700']}>
                    <View className='flex flex-row h-20 w-full justify-center items-center '>
                    <View className='w-12 h-12 bg-black absolute left-4'></View>
                    <Headline className='text-xl mt-2'>One-Time Bill Payment</Headline>
                    <View className='w-12 h-12 bg-black absolute right-4'></View>
                    </View>
                </LinearGradient>
                <View className='flex h-full w-full bg-orange-600'></View>
            </View>
        </SafeAreaView>
    )
}
