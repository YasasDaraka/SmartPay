import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/back.png');
const search = require('../../../assets/images/search.png');
const electric = require('../../../assets/images/electric.png');
const mobile = require('../../../assets/images/mobile.png');

export default function Notification() {
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
                        <Headline className='text-xl mt-2'>Notification</Headline>
                    </View>
                </LinearGradient>
                <View className='flex h-full w-full bg-white'>

                    <ScrollView className='h-full w-full'>

                        <View className='flex justify-center items-center h-full w-full mt-4'>

                            <View className='flex items-center justify-center mb-3 px-2 h-[23vw] w-[91vw] rounded-xl border-[0.3px]'>

                                <View className='flex justify-center w-full h-1/3'>
                                    <Headline className='text-base font-bold pl-1 m-0 '>Utility Biller Payment</Headline>
                                </View>

                                <View className='flex items-center justify-center w-full h-2/3'>
                                    <View className='flex flex-row items-center w-full h-1/2 '>

                                        <View className='flex flex-row items-center w-1/2 h-full'>
                                            <Text className='text-sm pl-1 m-0'>Pay for :</Text>
                                            <Headline className='text-sm font-semibold pl-1 m-0 '>Hutch Colombo</Headline>
                                        </View>

                                        <View className='flex items-end justify-center w-1/2 h-full '>
                                            <View className='flex justify-center items-center flex-row '>
                                                <Headline className='text-sm font-semibold pr-1 m-0 '>04-jul-24  11.06AM</Headline>
                                            </View>
                                        </View>
                                    </View>
                                    
                                    <View className='flex flex-row w-full h-1/2 '>
                                        <View className='flex flex-row items-start w-1/2 h-full'>
                                            <Text className='text-sm pl-1 m-0'>Status :</Text>
                                            <Headline className='text-sm font-semibold pl-1 m-0 '>Completed</Headline>
                                        </View>

                                        <View className='flex items-end justify-start w-1/2 h-full '>
                                            <View className='flex justify-center items-center flex-row '>
                                                <Headline className='text-sm font-semibold pr-1 m-0 '>Amount: LKR 170.00</Headline>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            

                        </View>
                    </ScrollView>

                </View>
            </View>
        </SafeAreaView>
    )
}
