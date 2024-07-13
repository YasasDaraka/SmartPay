import React from 'react'
import { Text, ImageBackground , View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import PassBtn from '../common/componnent/PassBtn';
const backgroundImage = require('../../assets/images/bank.jpg');

export default function LogIn() {
  return (
    <ImageBackground source={backgroundImage}  className='flex-1 justify-center items-center'>
        
        <View className='flex justify-center w-full h-full'>
          
        <View className='flex justify-evenly w-full h-20 absolute top-72'>
        <Text className={"text-center text-white font-serif font-bold text-[8vw] absolute bottom-24 left-0 right-0"}>Hello Yasas</Text>
        <Text className={"text-center text-white font-serif font-bold text-[5vw] absolute bottom-14 left-0 right-0"}>Good to see you here agian</Text>
        </View>
          <View className='flex-wrap justify-evenly w-full h-20 mt-80'>
          <Text className={"text-center text-white font-serif font-bold text-[4.5vw] absolute bottom-24 left-0 right-0"}>Enter Your PIN</Text>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"1"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"2"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"3"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          </View>
          <View className='flex-wrap justify-evenly w-full h-20 mt-7'>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"4"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"5"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"6"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          </View>
          <View className='flex-wrap justify-evenly w-full h-20 mt-7'>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"7"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"8"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"9"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          </View>
          <View className='flex-wrap justify-evenly w-full h-20 mt-7'>
          <PassBtn mode={"outlined"} value={""} styles={'opacity-0 justify-center w-20 h-20 rounded-full ml-11'}/>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"0"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PassBtn mode={"outlined"} value={"1"} styles={'justify-center w-20 h-20 rounded-full ml-11 bg-white opacity-75'}/>
          </TouchableOpacity>
          </View>
  
          <Text className={"text-center text-white font-serif font-bold text-[4.5vw] mt-10"}>Fogot Your PIN</Text>
          </View>
  </ImageBackground>
  )
}
