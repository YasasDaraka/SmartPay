import React, { useState } from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
import PagerView from 'react-native-pager-view';
const back = require('../../../assets/images/back.png');
const sendmoney = require('../../../assets/images/sendmoney.png');
const mobile = require('../../../assets/images/mobile.png');
const arrow = require('../../../assets/images/arrowlight.png');

export default function FundTransfer() {

    const [page, setPage] = useState(0);

    const handlePageChange = (e: any) => {
        setPage(e.nativeEvent.position);
    };

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
                    <PagerView className='flex w-full h-2/3' initialPage={0} onPageSelected={handlePageChange} useNext={false}>

                        <View className='flex items-center h-full w-full' key="1" >
                            <View className='flex justify-center items-center h-1/5 w-full'>
                                <Headline className='text-[25px] m-0 p-0 mt-10'>Sending money made</Headline>
                                <View className='flex flex-row justify-center'>
                                    <Headline className='m-0 p-0'>easy with </Headline>
                                    <Headline className='text-[26px] font-bold m-0 p-0'>SmartPay</Headline>
                                </View>
                            </View>

                            <View className='flex flex-col h-4/5 w-full'>
                                <View className='flex flex-row h-full'>
                                    <View className='h-full w-[45vw] '>
                                        <Image source={sendmoney} className='h-full w-full'></Image>
                                    </View>
                                    <View className='h-full w-3/5 bg-red-800'></View>
                                </View>
                            </View>
                        </View>
                        <View className='flex justify-center items-center h-full w-full' key="2" >
                            <Text>Step 2: Provide beneficiary details, Tap confirm to send money</Text>
                        </View>
                        <View className='flex justify-center items-center h-full w-full' key="3" >
                            <Text>Step 3: Save the beneficiary if you prefer</Text>
                        </View>
                        <View className='flex justify-center items-center h-full w-full' key="4" >
                            <Text>Step 3: Save the beneficiary if you prefer</Text>
                        </View>
                    </PagerView>

                    <View className='flex flex-row justify-center w-full h-10'>
                        {[...Array(4).keys()].map((_, index) => (
                            <View
                                key={index}
                                className={`w-3 h-3 ml-4 rounded-full ${page === index ? 'bg-yellow-500' : 'bg-gray-400'} mx-1.25`}
                            />
                        ))}
                    </View>

                    <View className='flex items-center justify-start w-full h-1/5'>

                        <View className='flex-row bg-white items-center justify-start px-4 h-2/5 w-[94vw] rounded-xl border-[1px] border-black'>

                            <View className='flex items-center justify-center w-16 h-2/3'>
                                <Image source={mobile} className='w-11 h-11 mr-4'></Image>
                            </View>

                            <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                                <Headline className='text-xl font-extrabold relative right-4'>Send Money</Headline>
                            </View>

                            <View className='flex justify-center items-center w-9 h-9 bg-[#403D1C] relative right-9 rounded-md'>
                                <Image source={arrow} className='w-6 h-6'></Image>
                            </View>
                        </View>

                        <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-2/5 w-[94vw] rounded-xl border-[1px] border-black'>

                            <View className='flex items-center justify-center w-16 h-2/3'>
                                <Image source={mobile} className='w-11 h-11 mr-4'></Image>
                            </View>

                            <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                                <Headline className='text-xl font-extrabold right-4'>Request Money</Headline>
                            </View>

                            <View className='flex justify-center items-center w-9 h-9 bg-[#403D1C] relative right-9 rounded-md'>
                                <Image source={arrow} className='w-6 h-6'></Image>
                            </View>
                        </View>

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
