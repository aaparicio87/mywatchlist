import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

import {
    SearchScreen,
    HomeScreen,
    FavoritesScreen,
    SettingsScreen
} from "@/screens";

import { BottomTabNavigatorParamList } from "../types.navigation";

type PropIcontab = {
    color: string,
    focused: boolean,
    size: number,
    route: RouteProp<BottomTabNavigatorParamList, keyof BottomTabNavigatorParamList>
}

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const TabNavigation = () => {

    const handleTabIcon = ({ color, focused, size, route }: PropIcontab): React.ReactNode => {
        let iconName: any;

        switch (route.name) {
            case 'Favorites':
                iconName = focused ? 'star' : 'star-outline';
                break;

            case 'Search':
                iconName = focused ? 'search' : 'search-outline';
                break;

            case 'Settings':
                iconName = focused
                    ? 'settings'
                    : 'settings-outline';
                break;

            default:
                iconName = focused
                    ? 'trending-up'
                    : 'trending-up-outline';
                break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
    }
    return (
        <Tab.Navigator
            screenOptions={({ route }) => (
                {
                    headerShown: false,
                    tabBarIcon: ({ color, focused, size }) => handleTabIcon({ color, focused, size, route })
                }
            )}>
            <Tab.Screen
                name="Watchlist"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Search"
                component={SearchScreen}
            />

            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
            />


        </Tab.Navigator>
    )
}