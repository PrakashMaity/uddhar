import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function IntroScreen() {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }} >
            <Text onPress={() => { navigation.navigate("Login") }} style={{}}>Login</Text>
            <Text style={{}}>            </Text>
            <Text onPress={() => { navigation.navigate("Signup") }}>Signup</Text>
        </View>
    )
}