import { View, Text,Pressable } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from '../../../utils/ResponsiveUI'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

interface header {
    back?:boolean,
    threeDot?:boolean,
    title?:string}
const SimpleHeader = ({back,threeDot,title}:header) => {
    return (
        <View style={{
            height: responsiveHeight(55),
            width: "100%",
            flexDirection: "row",
        }}>
            <Pressable
             style={{ height: "100%", width: responsiveWidth(35), justifyContent: 'center', alignItems: "center" }} >
               {back&& <AntDesign name="arrowleft" color={"black"} size={responsiveWidth(30)} />}
            </Pressable>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
               {title && <Text numberOfLines={1}>{title}</Text>}
            </View>
            <Pressable style={{ height: "100%", width: responsiveWidth(35), justifyContent: 'center', alignItems: "center" }} >
                {threeDot&&<Entypo name="dots-three-horizontal" color={"black"} size={responsiveWidth(25)} />}
            </Pressable>
        </View>
    )
}

export default SimpleHeader