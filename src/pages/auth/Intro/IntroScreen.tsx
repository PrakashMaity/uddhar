import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React, { Fragment, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import LargeButton from '../../../components/atoms/button/LargeButton'
import { responsiveHeight, responsiveWidth } from '../../../utils/ResponsiveUI'
import { styleConst } from '../../../style/root.style'
import { images } from '../../../../assets/images.global'
const { width } = Dimensions.get("window")
import {useTranslation} from 'react-i18next';

export default function IntroScreen() {
    const navigation = useNavigation()
    const {t, i18n} = useTranslation();

    const [activePage, setActivePage] = useState(0)

    const sliderData = [
        {
            image: images.IntroScreen.slider1,
            title: "Gain total control\nof your money",
            description: "Become your own money manager\nand make every cent count"
        },
        {
            image: images.IntroScreen.slider2,
            title: "Know where your\nmoney goes",
            description: "Track your transaction easily,\nwith categories and financial report "
        },
        {
            image: images.IntroScreen.slider3,
            title: "Planning ahead",
            description: "Setup your budget for each category so you in control"
        },

    ]

    const handleScrollEnd = (event) => {
        let contentOffsetX = event.nativeEvent.contentOffset.x + 10
        let curretPg = Math.round(contentOffsetX / width)
        setActivePage(curretPg)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }} >
            <View style={{ flex: 1 }} >
                <ScrollView
                    onMomentumScrollEnd={handleScrollEnd}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                >
                    {sliderData.map((item, index) => {
                        return (
                            <View key={index} style={{ height: "100%", width: Dimensions.get("window").width, paddingVertical: responsiveHeight(32), alignItems: "center" }} >
                                <View style={{ height: responsiveWidth(312), width: responsiveWidth(312), justifyContent: "center", alignItems: "center" }} >
                                    <Image source={item.image} style={{ height: "90%", width: "90%", resizeMode: "contain" }} />
                                </View>
                                <Text style={{ fontSize: responsiveHeight(35), fontFamily: styleConst.FONT_FAMILY.INTER_BOLD, marginTop: responsiveHeight(41), textAlign: 'center', color: "#212325" }} >{t('hello')}</Text>
                                <Text style={{ marginTop: responsiveHeight(14), fontSize: responsiveHeight(23), fontFamily: styleConst.FONT_FAMILY.PRIMARY, paddingHorizontal: responsiveWidth(20), textAlign: "center" }} >{item.description}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={{ marginBottom: responsiveHeight(30), flexDirection: "row", alignItems: "center", justifyContent: "center" }} >
                {[0, 1, 2].map((item, index) => {
                    return (
                        <View key={index} >
                            {
                                activePage == index ?
                                    <View key={index} style={{ height: responsiveHeight(13), width: responsiveHeight(13), borderRadius: responsiveHeight(16) / 2, backgroundColor: styleConst.COLOR.VIOLET.VIOLET_100, marginHorizontal: responsiveWidth(5) }} />
                                    :
                                    <View key={index} style={{ height: responsiveHeight(8), width: responsiveHeight(8), borderRadius: responsiveHeight(8) / 2, backgroundColor: "#EEE5FF", marginHorizontal: responsiveWidth(5) }} />
                            }
                        </View>
                    )
                })}
            </View>
            <View style={{ marginHorizontal: responsiveWidth(20) }} >
                <LargeButton
                    title='Sign Up'
                    onPress={() => { navigation.navigate("Signup") }}
                />
                <LargeButton
                    onPress={() => { navigation.navigate("Login") }}
                    buttonTextColor={styleConst.COLOR.VIOLET.VIOLET_100}
                    title='Login'
                    style={{ marginVertical: responsiveHeight(16), backgroundColor: styleConst.COLOR.VIOLET.VIOLET_20 }} />
            </View>
        </View>
    )
}