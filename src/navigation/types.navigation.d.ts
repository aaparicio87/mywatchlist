import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  BottomTab: undefined;
};

type BottomTabNavigatorParamList = {
  Watchlist: undefined;
  Search: undefined;
  Favorites: undefined;
  Settings: undefined
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">