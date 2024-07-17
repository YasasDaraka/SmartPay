import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/back.png');
const beneficiaries = require('../../../assets/images/beneficiaries.png');
export default function Beneficiaries() {
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
                        <Headline className='text-xl mt-2'>Beneficiaries</Headline>
                    </View>
                </LinearGradient>
                <View className='flex h-full w-full bg-white items-center'>
                    <View className='h-[80vh] w-full'>
                        <ScrollView className='h-full w-full'>

                            <View className='flex justify-center items-center h-[80vh] w-full mt-4'>

                                <View className=' flex items-center w-full h-[30vh] mb-8'>

                                    <View className='flex justify-center items-center w-full h-3/5'>
                                        <Image source={beneficiaries} className='w-1/3 h-full'></Image>
                                    </View>

                                    <View className='flex justify-center items-center w-full h-2/5'>
                                        <Headline className='text-xl'>You do not have any saved beneficiaries</Headline>
                                        <Headline className='text-base'>Saved beneficiaries will appear here</Headline>
                                    </View>

                                </View>

                            </View>

                        </ScrollView>

                    </View>

                    <View className='flex justify-center items-center w-5/6 h-[13vw] bg-[#FCB117] rounded-lg'>
                        <Headline className='text-xl font-extrabold'>Add Beneficiaries</Headline>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}
