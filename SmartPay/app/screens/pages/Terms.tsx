import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/back.png');

export default function Terms() {
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
                        <Headline className='text-xl mt-2'>Terms and Conditions</Headline>
                    </View>
                </LinearGradient>
                <View className='flex h-full w-full bg-white items-center'>
                    <View className='h-[80vh] w-full'>
                        <ScrollView className='h-full w-full'>

                            <View className='flex items-center h-auto w-full mt-4'>
                                <View className='flex justify-center h-[5vh] w-full'>
                                    <Text className='text-xl font-bold ml-4 mb-2'>Please read carefully.</Text>
                                </View>
                                <View className='flex justify-center h-auto w-full px-4'>
                                    <Text className='text-base'>THIS IS A LEGALLY BINDING AGREEMENT BETWEEN YOU AND BANK OF CEYLON 
                                        (hereinafter referred to as “ the Bank”) establishing the terms and conditions (sometimes referred to as “Terms of Use”) under which this website may be used whether personally or on behalf of an entity, concerning your access to and use of the http://www.boc.lk website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (hereinafter referred to as the Web Site”).

                                        By accessing this website, you agree to be bound by the terms and conditions below. These terms and conditions are subject to changes and modifications without notice, from time to time at the sole discretion of the Bank. The Bank will notify you about any changes to these terms and conditions by updating the “Last updated” date of these Terms of Use.

                                        If you do not accept these terms and conditions DO NOT ACCESS THIS WEBSITE.

                                        1. DETAILS OF THE BANK

                                        Bank of Ceylon (“Bank”), a banking corporation duly established under the Bank of Ceylon Ordinance of No.53 of 1938 and having its head office at No.1, BOC Square, Bank of Ceylon Mawatha, Colombo 01 (00100), Sri Lanka.

                                        2. USER REPRESENTATIONS

                                        You represent and warrant that:

                                        (1) you have the legal capacity and you agree to comply with these Terms of Use;

                                        (2) you are not a minor;

                                        (3) you will not access the Web Site through automated or non-human means, whether through a bot, script, or otherwise;

                                        (4) you will not use the Web Site for any illegal or unauthorized purpose; and

                                        (5) your use of the Web Site will not violate any applicable law or regulation.

                                        If you provide any information that is untrue, inaccurate, not current, or incomplete, the Bank has the right to suspend or terminate the access of this website.

                                        WEBSITE CONTENT AND MATERIALS

                                        This Web Site does not constitute an offer or solicitation on the part of the Bank to provide any product or service or investment advice. The information on this Website is for information purposes only. User accesses, uses, and relies upon such content at User’s own risk. Please seek the professional advice as necessary regarding the evaluation of any content on this Website.

                                        The information provided on this Web Site is not intended for distribution to, or use by, any person to whom it is unlawful to make such offer or solicitation or where the local law or regulation does not permit the purchase of, subscription for or otherwise use of such products or services. The Web Site should not be considered as communicating any invitation or inducement to engage in banking or investment activity or any offer to buy or sell any product or service outside any jurisdiction where the Bank is not licensed or authorized to perform such activities.

                                        APPROPRIATENESS

                                        Products and services mentioned in the Website may not be suitable or appropriate for you or in all geographical areas. Your particular needs, objectives and financial situation were not taken into account in the preparation of this Website and the materials contained herein. You must make your own independent decisions regarding any product or service mentioned herein. The fact that the Bank has made available through the Website, products, services and other information constitutes neither a recommendation that you enter into a particular transaction nor a representation that any product or service is suitable or appropriate for you.

                                        PRODUCTS AND SERVICES

                                        Every product or service may not be available in all locations. Products and services are available only in a particular location at the sole discretion of the Bank or the relevant Bank’s subsidiary or associate, subject to the distinct terms and conditions on which they are offered and such products and services may be withdrawn or amended at any time without notice. Details relating to fees, commissions or other charges that may apply to products or services will be informed by the office delivering the product or service.

                                        USER DATA

                                        The Bank will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although the Bank performs regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that the Bank shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against the Bank arising from any such loss or corruption of such data

                                    </Text>
                                </View>


                            </View>

                        </ScrollView>

                    </View>

                    <View className='flex justify-center items-center w-5/6 h-[13vw] bg-[#FCB117] rounded-lg mt-4'>
                        <Headline className='text-xl font-extrabold'>OK</Headline>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}
