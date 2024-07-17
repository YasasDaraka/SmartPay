import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/back.png');
const mobile = require('../../../assets/images/mobile.png');
const arrow = require('../../../assets/images/blackarrow.png');

export default function Contact() {
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
                        <Headline className='text-xl mt-2'>Contact Us</Headline>
                    </View>
                </LinearGradient>
                <View className='flex h-[89vh] w-full items-center bg-white'>

                    <ScrollView className='h-full w-full'>

                        <View className='flex justify-center items-center h-[89vh] w-full mt-4'>


                        </View>

                    </ScrollView>

                    <View className='flex-row items-center justify-start mb-4 px-4 h-[18vw] w-[94vw] rounded-xl border-[2px] border-[#FCB117]'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                            <Image source={mobile} className='w-11 h-11 mr-4'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-extrabold right-4 m-0 p-0'>Give Us a Call</Headline>
                            <Text className='text-base right-4 p-0 mb-1'>We will help you</Text>
                        </View>

                        <View className='flex justify-center items-center w-8 h-8 bg-[#FCB117] relative right-9 rounded-md'>
                            <Image source={arrow} className='w-4 h-4'></Image>
                        </View>
                    </View>

                </View>



            </View>
        </SafeAreaView>
    )
}
