import React, { useState } from 'react';
import { Image, View, StatusBar, TouchableOpacity, Modal } from 'react-native'
import { Headline, Text } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const bell = require('../../../assets/images/bell.png');
const smartpaylogo = require('../../../assets/images/smartpay.png');
const promotion = require('../../../assets/images/promotion.png');
const mobile = require('../../../assets/images/phone.png');
const plus = require('../../../assets/images/plus.png');
const smartpaydark = require('../../../assets/images/smartpaydark3.png');
const fund = require('../../../assets/images/fund.png');
const qr = require('../../../assets/images/qr.png');
const bills = require('../../../assets/images/bills.png');
const shop = require('../../../assets/images/shop.png');
const payments = require('../../../assets/images/payments.png');
const billicon = require('../../../assets/images/billicon.png');
const benef = require('../../../assets/images/benef.png');
const terms = require('../../../assets/images/terms.png');
const promo = require('../../../assets/images/promo.png');
const faq = require('../../../assets/images/faq.png');
const settings = require('../../../assets/images/settings.png');
const logout = require('../../../assets/images/logout.png');
const mobileicon = require('../../../assets/images/mobileicon.png');
export default function Dashboard() {

  const router = useRouter();

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className='flex w-full h-full' >
        <StatusBar barStyle="light-content" backgroundColor="#222222" />

        <View className='h-1/3 w-full bg-[#222222]' >
          <Modal
            transparent={true}
            animationType="none"
            visible={isSidebarVisible}
            onRequestClose={toggleSidebar}
          >
            <View className='flex w-[90vw] h-full'>
              <View className='flex flex-row h-1/5 w-full bg-[#1C1C1C] rounded-b-3xl'>
                <View className='w-1/4 h-full flex items-center'>
                  <View className=' relative w-[15vw] mt-7 h-[15vw] rounded-full border-[#F1B041] border-[3px]'></View>
                </View>
                <View className='w-3/6 h-full'>
                  <View className='h-2/6 w-full justify-center'>
                    <Headline className='text-lg pl-1 text-white mt-6'>Yasas Jayalath</Headline>
                  </View>

                  <View className='flex flex-row h-1/5 w-full mb-2'>
                    <View className='w-1/6 h-full flex justify-center items-start'>
                      <Image source={mobile} className='h-5 w-5 ml-1'></Image>
                    </View>
                    <View className='w-4/6 h-full flex justify-center items-start'>
                      <Text className='text-white'>0768008972</Text>
                    </View>
                  </View>

                  <View className='h-2/6 w-full'>

                    <View className='flex justify-center items-center rounded-full w-2/3 h-2/3 ml-1 bg-white'>
                      <Text className='font-bold'>View Profile</Text>
                    </View>

                  </View>
                </View>
                <View className='flex items-center ml-6'>
                  <TouchableOpacity onPress={toggleSidebar} >
                    <View className='flex justify-center mt-6 items-center w-[10vw] h-[10vw] rounded-full bg-[#484848]'>
                      <Image source={plus} className='w-5 h-5 rotate-45'></Image>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='flex h-4/5 w-full bg-white px-2'>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>

                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/Instruments") }} >
                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={payments} className='w-8 h-8 mr-2'></Image>
                    </View>

                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>Payment Instruments</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>
                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/Billers") }} >

                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={billicon} className='w-8 h-8 mr-2'></Image>
                    </View>

                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>Biller Management</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>
                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/Beneficiaries") }} >

                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={benef} className='w-8 h-8 mr-2'></Image>
                    </View>

                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>Beneficiary Management</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>
                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/Terms") }} >

                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={terms} className='w-8 h-8 mr-2'></Image>
                    </View>

                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>Terms and Conditions</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>
                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/Offers") }} >

                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={promo} className='w-8 h-8 mr-2'></Image>
                    </View>

                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>Promotion</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>
                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/Contact") }} >

                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={mobileicon} className='w-8 h-8 mr-2'></Image>
                    </View>

                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>Contact Us</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>
                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/FAQ") }} >

                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={faq} className='w-8 h-8 mr-2'></Image>
                    </View>

                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>FAQ</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>
                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/Settings") }} >

                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={settings} className='w-8 h-8 mr-2'></Image>
                    </View>

                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>Settings</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex-row bg-[#EDEDED] items-center justify-start px-4 mt-2 h-[6vh] border-r-[1.5vw] border-r-[#F1B041] w-full rounded-xl'>
                  <TouchableOpacity className='flex-row' onPress={() => { toggleSidebar(); router.navigate("screens/pages/LogIn") }} >

                    <View className='flex items-center justify-center w-10 h-2/3'>
                      <Image source={logout} className='w-8 h-8 mr-2'></Image>
                    </View>
                    <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                      <Headline className='text-lg font-extrabold right-4'>Log Out</Headline>
                    </View>
                  </TouchableOpacity>
                </View>

                <View className='flex justify-center items-center h-1/6 w-full absolute bottom-0' >
                  <Image source={smartpaydark} className='h-4/5 w-2/5 ml-6'></Image>
                </View>
              </View>
            </View>
          </Modal>

          <View className='flex flex-row items-center h-1/4 w-full mt-2' >

            <View className='flex flex-row w-1/2 h-full'>
              <View className='w-1/3 h-full flex justify-center items-center'>
                <TouchableOpacity className='flex w-full h-full justify-center items-center' onPress={toggleSidebar} >
                  <View className=' flex justify-between w-3/6 h-7'>
                    <View className='w-2/3 h-1 bg-[#F1B041] rounded-full'></View>
                    <View className='w-full h-1 bg-white rounded-full'></View>
                    <View className='w-full h-1 bg-white rounded-full'></View>
                  </View>
                </TouchableOpacity>
              </View>
              <View className='flex flex-row items-center bg-[#2F2F2F] w-[33.5vw] h-full rounded-full'>
                <View className=' relative left-2 w-[14vw] h-[14vw] rounded-full border-[#F1B041] border-[3px]'></View>
                <View className=' relative left-3 w-14 h-5/6 justify-center'>
                  <Text className='text-white ml-1'>Hello,</Text>
                  <Text className='font-bold text-white text-lg ml-1'>Yasas</Text>
                </View>
              </View>
            </View>

            <View className='flex items-end w-1/2 h-full '>
              <View className='flex items-center justify-center h-full w-1/3'>
                <TouchableOpacity onPress={() => { router.navigate("screens/pages/Notification") }} >
                  <Image source={bell} className='h-10 w-10 rotate-45 ml-3'></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className='flex justify-center items-center h-2/6 w-full' >
            <Image source={smartpaylogo} className='h-[21vw] w-[47vw] relative right-1'></Image>
          </View>

          <View className='flex flex-row items-center justify-around h-3/6 w-full bg-[#222222]' >
            <View className='w-[90vw] h-full flex flex-row items-center justify-around'>
              <View className='flex justify-center items-center'>
                <TouchableOpacity onPress={() => { router.navigate("screens/pages/FundTransfer") }} >
                  <View className={"flex justify-center items-center bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}>
                  <Image source={fund} className='h-4/6 w-4/6'></Image>
                  </View>
                </TouchableOpacity>
                <Text className='relative bottom-2 text-white'>Fund Tranfer</Text>
              </View>

              <View className='flex justify-center items-center'>
                <View className={"flex justify-center items-center bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}>
                <Image source={qr} className='h-4/6 w-4/6'></Image>
                </View>
                <Text className='relative bottom-2 text-white'>QR Payment</Text>
              </View>

              <View className='flex justify-center items-center'>
                <TouchableOpacity onPress={() => { router.navigate("screens/pages/BillPay") }} >
                  <View className={"flex justify-center items-center bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}>
                  <Image source={bills} className='h-4/6 w-4/6'></Image>
                  </View>
                </TouchableOpacity>
                <Text className='relative bottom-2 text-white'>Pay Bils</Text>
              </View>

              <View className='flex justify-center items-center'>
                <TouchableOpacity onPress={() => { router.navigate("screens/pages/Business") }} >
                  <View className={"flex justify-center items-center bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}>
                  <Image source={shop} className='h-4/6 w-4/6'></Image>
                  </View>
                </TouchableOpacity>
                <Text className='relative bottom-2 text-white'>My Shop</Text>
              </View>

            </View>

          </View>

        </View>


        <View className='flex w-full h-2/3 top-4'>
          <ScrollView className='w-full'>

            <View className='flex justify-center items-center h-[67vw] w-full bg-white '>

              <View className='h-[12vw] w-full flex-row items-center justify-between px-4'>
                <Headline className='text-lg font-bold pl-1'>Promotions</Headline>
                <Text className='text-[#e7a93e] font-bold'>View All</Text>
              </View>
              <Image source={promotion} className='h-[55vw] w-[91vw]'></Image>
            </View>

            <View className='flex items-center h-[35vw] w-full bg-white '>

              <View className='h-[12vw] w-full flex-row items-center justify-between px-4'>
                <Headline className='text-lg font-bold pl-1'>Accounts</Headline>
                <Text className='text-[#e7a93e] font-bold'>Manage</Text>
              </View>
              <View className='flex-row items-center justify-between px-4 h-[23vw] w-[91vw] rounded-xl 
          border-l-[2vw] border-l-[#F1B041] border-r-[0.8px] border-t-[0.8px] border-b-[0.8px]
          border-t-gray-500 border-b-gray-500 border-r-gray-500'>

                <View className='flex justify-center w-1/2 h-2/3'>
                  <Headline className='text-lg font-bold pl-1 m-0'>MY BOC</Headline>
                  <Headline className='text-lg font-bold pl-1 m-0'>XXXX</Headline>
                </View>

                <View className='flex items-end justify-center w-1/2 h-2/3 '>
                  <Text className='text-lg font-bold pl-1 m-0'>Balance</Text>
                  <View className='flex justify-center items-center flex-row '>
                    <Text className='text-sm font-bold pl-1 m-0'>LKR</Text>
                    <Text className='text-lg font-bold pl-1 m-0'>100,000.00</Text>
                  </View>

                </View>
              </View>
            </View>

            <View className='flex items-center h-auto w-full bg-white mb-3'>

              <View className='h-[12vw] w-full flex-row items-center justify-between px-4'>
                <Headline className='text-lg font-bold pl-1'>Recent Transactions</Headline>
                <Text className='text-[#e7a93e] font-bold'>View All</Text>
              </View>
              <View className='flex-row items-center justify-between mb-3 px-4 h-[23vw] w-[91vw] rounded-xl border-[0.6px] bg-[#EDEDED]'>

                <View className='flex justify-center w-1/2 h-2/3'>
                  <Headline className='text-lg font-bold pl-1 m-0 '>Bill Payment</Headline>
                  <Text className='text-lg pl-1 m-0'>Hutch</Text>
                </View>

                <View className='flex items-end justify-center w-1/2 h-2/3 '>
                  <View className='flex justify-center items-center flex-row '>
                    <Text className='text-sm font-bold pl-1 m-0'>LKR</Text>
                    <Text className='text-lg font-bold pl-1 m-0'>100.00</Text>
                  </View>
                  <Text className='text-base pl-1 m-0'>04-jul-24 11.06AM</Text>
                </View>
              </View>

              <View className='flex-row items-center justify-between mb-3 px-4 h-[23vw] w-[91vw] rounded-xl border-[0.6px] bg-[#EDEDED]'>

                <View className='flex justify-center w-1/2 h-2/3'>
                  <Headline className='text-lg font-bold pl-1 m-0 '>Bill Payment</Headline>
                  <Text className='text-lg pl-1 m-0'>Dialog</Text>
                </View>

                <View className='flex items-end justify-center w-1/2 h-2/3 '>
                  <View className='flex justify-center items-center flex-row '>
                    <Text className='text-sm font-bold pl-1 m-0'>LKR</Text>
                    <Text className='text-lg font-bold pl-1 m-0'>200.00</Text>
                  </View>
                  <Text className='text-base pl-1 m-0'>04-jul-24 11.06AM</Text>
                </View>
              </View>

              <View className='flex-row items-center justify-between mb-3 px-4 h-[23vw] w-[91vw] rounded-xl border-[0.6px] bg-[#EDEDED]'>

                <View className='flex justify-center w-1/2 h-2/3'>
                  <Headline className='text-lg font-bold pl-1 m-0 '>Bill Payment</Headline>
                  <Text className='text-lg pl-1 m-0'>Hutch</Text>
                </View>

                <View className='flex items-end justify-center w-1/2 h-2/3 '>
                  <View className='flex justify-center items-center flex-row '>
                    <Text className='text-sm font-bold pl-1 m-0'>LKR</Text>
                    <Text className='text-lg font-bold pl-1 m-0'>100.00</Text>
                  </View>
                  <Text className='text-base pl-1 m-0'>04-jul-24 11.06AM</Text>
                </View>
              </View>

            </View>

          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  )
}
