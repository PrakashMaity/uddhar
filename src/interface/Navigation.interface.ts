import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamListInterface = {
    SplashScreen: undefined;
    IntroScreen: undefined;
    Login: undefined;
    Signup: undefined;
    Home: undefined;
    
  };

  export type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamListInterface>;