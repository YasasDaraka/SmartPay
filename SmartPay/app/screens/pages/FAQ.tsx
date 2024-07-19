import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/back.png');
const plus = require('../../../assets/images/plus.png');
export default function FAQ() {
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
                        <Headline className='text-xl mt-2'>FAQ</Headline>
                    </View>
                </LinearGradient>
                <View className='flex h-full w-full bg-white'>

                    <ScrollView className='h-full w-full'>

                        <View className='flex justify-center items-center h-full w-full mt-2 px-2'>
                            
                            <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[7vh] border-l-[1.5vw] border-l-[#F1B041] w-full rounded-xl'>
                                <View className='flex ml-2 justify-center w-[65vw] h-2/3 '>
                                    <Headline className='text-lg font-extrabold'>What is SmartPay</Headline>
                                </View>
                                <View className='flex items-center justify-center w-10 h-2/3 absolute right-2'>
                                    <Image source={plus} className='w-6 h-6'></Image>
                                </View>
                            </View>

                            <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[7vh] border-l-[1.5vw] border-l-[#F1B041] w-full rounded-xl'>
                                <View className='flex ml-2 justify-center w-[80vw] h-2/3 '>
                                    <Headline className='text-lg font-extrabold'>Is a bank involved with SmartPay</Headline>
                                </View>
                                <View className='flex items-center justify-center w-10 h-2/3 absolute right-2'>
                                    <Image source={plus} className='w-6 h-6'></Image>
                                </View>
                            </View>

                            <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[7vh] border-l-[1.5vw] border-l-[#F1B041] w-full rounded-xl'>
                                <View className='flex ml-2 justify-center w-[65vw] h-2/3 '>
                                    <Headline className='text-lg font-extrabold'>How to signup for SmartPay</Headline>
                                </View>
                                <View className='flex items-center justify-center w-10 h-2/3 absolute right-2'>
                                    <Image source={plus} className='w-6 h-6'></Image>
                                </View>
                            </View>

                            <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[7vh] border-l-[1.5vw] border-l-[#F1B041] w-full rounded-xl'>
                                <View className='flex ml-2 justify-center w-[76vw] h-2/3 '>
                                    <Headline className='text-lg font-extrabold'>SmartPay compatible with any device</Headline>
                                </View>
                                <View className='flex items-center justify-center w-10 h-2/3 absolute right-2'>
                                    <Image source={plus} className='w-6 h-6'></Image>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

                </View>
            </View>
        </SafeAreaView>
    )
}
