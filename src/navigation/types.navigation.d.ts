import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">