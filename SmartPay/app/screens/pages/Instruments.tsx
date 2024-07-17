import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/back.png');
const boc = require('../../../assets/images/boc.png');
const plus = require('../../../assets/images/plus.png');
export default function Instruments() {
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
                        <Headline className='text-xl mt-2'>Payment Instruments</Headline>
                    </View>
                </LinearGradient>
                <View className='flex h-full w-full bg-white items-center'>
                    <View className='h-[76.5vh] w-full'>
                        <ScrollView className='h-full w-full'>

                            <View className='flex items-center h-[76.5vh] w-full mt-5'>



                                <View className='flex flex-row mt-1 justify-center h-[24vw] w-[91vw] border-[0.2px] border-black rounded-lg'>
                                    <View className='flex justify-center items-center w-2/6 h-full'>
                                        <Image source={boc} className='w-[18vw] h-[10vw]'></Image>
                                    </View>
                                    <View className='flex justify-center w-4/6 h-full'>
                                        <Headline className='text-base font-extrabold'>myboc</Headline>
                                        <View className='flex justify-center items-center rounded-md w-16 h-5 bg-[#FCB117]'>
                                            <Text className='font-semibold'>Savings</Text>
                                        </View>
                                        <Headline className='text-base font-extrabold'>XXXX</Headline>
                                    </View>
                                </View>






                            </View>

                        </ScrollView>

                    </View>

                    <View className='flex flex-row justify-center h-[22vw] w-[91vw] border-[0.2px] border-black rounded-lg'>
                        <View className='flex justify-center items-center w-2/6 h-full'>
                            <View className='flex justify-center items-center w-[12.5vw] h-[12.5vw] rounded-full border-[1px] border-black'>
                            <Image source={plus} className='w-5 h-5'></Image>
                            </View>
                        </View>
                        <View className='flex justify-center w-4/6 h-full'>
                            <Headline className='text-base font-extrabold'>Add new payment Instrument</Headline>
                        </View>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}
