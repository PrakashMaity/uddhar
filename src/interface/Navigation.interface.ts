import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamListInterface = {
    SplashScreen: undefined;
    IntroScreen: undefined;
    Login: undefined;
    Signup: undefined;
    Home: undefined;
    pinSetup:undefined;
    accountSetup:undefined;
    addAccount:undefined;
  };

  export type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListInterface>;