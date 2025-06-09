import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types.navigation';
import { useAuth } from '@/hooks/useAuth';
import LoginScreen from '@/screens/LoginScreen/LoginScreen';
import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import { useGlobalStyles } from '@/hooks/useGlobalStyled';


const RootStack = createNativeStackNavigator<RootStackParamList>();

export const MainNavigation = () => {

    const auth = useAuth()
    const { styledGlobal } = useGlobalStyles()

    return (
        <RootStack.Navigator screenOptions={{ contentStyle: styledGlobal.background }}>
            {
                !auth.isLoggedIn ?
                    (
                        <RootStack.Screen
                            name='Login'
                            options={{
                                headerShown: false
                            }}
                            component={LoginScreen}
                        />
                    ) : (
                        <RootStack.Screen
                            name='Home'
                            options={{
                                headerShown: false
                            }}
                            component={HomeScreen}
                        />
                    )
            }
        </RootStack.Navigator>
    )
}