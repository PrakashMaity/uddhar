import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamListInterface = {
  SplashScreen: undefined;
  IntroScreen: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  pinSetup: undefined;
  accountSetup: undefined;
  addAccount: undefined;
  profile: undefined;
  accounts: undefined;
  detailsAccounts: undefined;
  emptyBudget: undefined;
  createBudget: undefined;
  Budget: undefined;
  detailsBudget: undefined;
  detailsTransaction: undefined;
  transaction: undefined;
  financialReport: undefined;
};

export type ScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamListInterface>;
