import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from '../../../helper/ResponsiveUI'
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import { styleConst } from '../../../theme/root.style';

export default function MonthSelectionHeader({ filteronPress }: {
    filteronPress?: () => void
}) {

    const [isMonthModal, setIsMonthModal] = useState(false)
    const [selectedMonth, setSelectedMonth] = useState({
        id: 1,
        name: "January"
    })
    const onpressMonthModal = () => setIsMonthModal((isMonthModal) => !isMonthModal);


    const months = [
        {
            id: 1,
            name: "January"
        },
        {
            id: 2,
            name: "February"
        },
        {
            id: 3,
            name: "March"
        },
        {
            id: 4,
            name: "April"
        },
        {
            id: 5,
            name: "May"
        },
        {
            id: 6,
            name: "June"
        },
        {
            id: 7,
            name: "July"
        },
        {
            id: 8,
            name: "August"
        },
        {
            id: 9,
            name: "September"
        },
        {
            id: 10,
            name: "October"
        },
        {
            id: 11,
            name: "November"
        },
        {
            id: 12,
            name: "Deccmber"
        },
    ]
    return (
        <View
            style={{
                height: responsiveHeight(75),
                width: "100%",
                flexDirection: "row",
                paddingHorizontal: responsiveWidth(20),
                alignItems: "center",
            }}
        >
            <View style={{ flex: 1 }} >
                <TouchableOpacity
                    onPress={onpressMonthModal}
                    activeOpacity={0.5}
                    style={{ height: responsiveHeight(58), width: responsiveWidth(100), borderWidth: responsiveHeight(1.5), borderColor: styleConst.COLOR.GREY.GREY_20, flexDirection: "row", borderRadius: responsiveHeight(50), justifyContent: "center", alignItems: "center" }} >
                    <Feather
                        name="chevron-down"
                        color={styleConst.COLOR.VIOLET.VIOLET_100}
                        size={responsiveWidth(26)}
                    />
                    <Text style={{ fontSize: responsiveHeight(17), fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD, color: styleConst.COLOR.DARK.DARK_75 }} >{selectedMonth.name}</Text>
                </TouchableOpacity>
            </View>
            <Pressable
            disabled={filteronPress!=undefined?false:true}
            onPress={filteronPress}
            style={{ height: responsiveHeight(58), padding: responsiveWidth(10), borderWidth: responsiveHeight(1.5), borderColor: styleConst.COLOR.GREY.GREY_20, borderRadius: responsiveHeight(15), justifyContent: "center", alignItems: "center" }} >
                <Octicons
                    name="filter"
                    color={styleConst.COLOR.DARK.DARK_75}
                    size={responsiveWidth(24)}
                />
            </Pressable>

            <Modal
                animationType="none"
                visible={isMonthModal}
                onRequestClose={onpressMonthModal}
                transparent
            >
                <Pressable
                    onPress={onpressMonthModal}
                    style={{ flex: 1, paddingHorizontal: responsiveWidth(20), paddingTop: responsiveHeight(75) }} >
                    <View style={{ backgroundColor: "#F8F8F8", width: responsiveWidth(100), borderRadius: responsiveWidth(10), elevation: responsiveHeight(5), paddingHorizontal: responsiveWidth(10) }} >
                        {
                            months.map((item, index) => {
                                return (
                                    <Text
                                        onPress={() => {
                                            setSelectedMonth(item)
                                            onpressMonthModal()
                                        }}
                                        key={index} style={{ textAlign: "center", paddingVertical: responsiveHeight(6), fontSize: responsiveHeight(20), fontFamily: styleConst.FONT_FAMILY.INTER_SEMIBOLD, color: styleConst.COLOR.VIOLET.VIOLET_100, borderBottomColor: styleConst.COLOR.GREY.GREY_20, borderBottomWidth: responsiveHeight(1.3) }}  >{item.name}</Text>
                                )
                            })
                        }
                    </View>
                </Pressable>
            </Modal>

        </View>
    )
}