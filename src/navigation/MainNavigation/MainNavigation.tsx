import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '@/hooks/useAuth';
import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { LoginScreen } from '@/screens';

import { RootStackParamList } from '../types.navigation';
import { TabNavigation } from '../TabNavigation/TabNavigation';


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
                            name='BottomTab'
                            options={{
                                headerShown: false
                            }}
                            component={TabNavigation}
                        />
                    )
            }
        </RootStack.Navigator>
    )
}