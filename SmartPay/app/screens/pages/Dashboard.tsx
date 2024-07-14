import React from 'react'
import { Image, View } from 'react-native'
import { Text } from 'react-native-paper'
import { ScrollView } from 'react-native'
const bell = require('../../../assets/images/bell.png');
const smartpaylogo = require('../../../assets/images/smartpay.png');
export default function Dashboard() {
  return (
    <View className='flex w-full h-full' >
      <View className='h-1/3 w-full bg-[#222222]' >

        <View className='flex flex-row items-center h-1/4 w-full' >

          <View className='flex flex-row w-1/2 h-full'>
            <View className='w-1/3 h-full flex justify-center items-center'>
              <View className=' flex justify-between w-3/6 h-3/6'>
                  <View className='w-2/3 h-1/6 bg-[#F1B041] rounded-full'></View>
                  <View className='w-full h-1/6 bg-white rounded-full'></View>
                  <View className='w-full h-1/6 bg-white rounded-full'></View>
              </View>
            </View>
            <View className='flex flex-row items-center bg-[#2F2F2F] w-2/3 h-full rounded-full'>
              <View className=' relative left-2 w-14 h-5/6 rounded-full border-[#F1B041] border-[3px]'></View>
              <View className=' relative left-3 w-14 h-5/6 justify-center'>
                <Text className='text-white ml-1'>Hello,</Text>
                <Text className='font-bold text-white text-lg ml-1'>Yasas</Text>
              </View>
            </View>
          </View>

          <View className='flex items-end w-1/2 h-full '>
            <View className='flex items-center justify-center h-full w-1/3'>
              <Image source={bell} className='h-10 w-10 rotate-45 ml-3'></Image>
            </View>
          </View>
        </View>

        <View className='flex justify-center items-center h-2/6 w-full' >
        <Image source={smartpaylogo} className='h-20 w-44 relative bottom-1'></Image>
        </View>

        <View className='flex flex-row items-center justify-around h-3/6 w-full' >
          <View className='w-[90vw] h-full flex flex-row items-center justify-around'>
          <View className='flex justify-center items-center'>
            <View className={"bg-[#F1B041] w-[17vw] h-[17vw] rounded-full relative bottom-3"}></View>
            <Text className='relative bottom-2 text-white'>Found Tranfer</Text>
          </View>

          <View className='flex justify-center items-center'>
            <View className={"bg-[#F1B041] w-[17vw] h-[17vw] rounded-full relative bottom-3"}></View>
            <Text className='relative bottom-2 text-white'>QR Payment</Text>
          </View>

          <View className='flex justify-center items-center'>
            <View className={"bg-[#F1B041] w-[17vw] h-[17vw] rounded-full relative bottom-3"}></View>
            <Text className='relative bottom-2 text-white'>Paay Bils</Text>
          </View>

          <View className='flex justify-center items-center'>
            <View className={"bg-[#F1B041] w-[17vw] h-[17vw] rounded-full relative bottom-3"}></View>
            <Text className='relative bottom-2 text-white'>My Shop</Text>
          </View>

          </View>

        </View>

      </View>


      <View className='flex w-full h-2/3 bg-[#9b5656] '>
        <ScrollView className='w-full'>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
          <Text className='mt-5 w-full text-center'>Yasas</Text>
        </ScrollView>
      </View>

    </View>
  )
}
