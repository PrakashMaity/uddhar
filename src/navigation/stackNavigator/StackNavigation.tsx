import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../../pages/auth/SplashScreen/SplashScreen.page";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "../../pages/auth/Intro/IntroScreen/IntroScreen.page";
import Login from "../../pages/auth/logIn/Login.page";
import Signup from "../../pages/auth/signUp/Signup.page";
import { RootStackParamListInterface } from "../../interface/Navigation.interface";
import PinSetup from "../../pages/logical/newAccount/pinSetup/PinSetup.page";
import SetupAccount from "../../pages/logical/newAccount/setupAccount/SetupAccount.page";
import AddAccount from "../../pages/logical/newAccount/addAccount/AddAccount.page";
import Profile from "../../pages/profile/Profile.page";
import Home from "../../pages/logical/home/Home.page";
import Accounts from "../../pages/accounts/Accounts.page";
import DetailsAccounts from "../../pages/details_accounts/DetailsAccounts.page";

const Stack = createNativeStackNavigator<RootStackParamListInterface>();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="detailsAccounts" component={DetailsAccounts} />
        <Stack.Screen name="accounts" component={Accounts} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Group>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="IntroScreen" component={IntroScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="pinSetup" component={PinSetup} />
          <Stack.Screen name="accountSetup" component={SetupAccount} />
          <Stack.Screen name="addAccount" component={AddAccount} />
        </Stack.Group>

        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
