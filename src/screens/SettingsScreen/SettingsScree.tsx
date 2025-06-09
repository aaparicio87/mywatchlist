import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalStyles } from '@/hooks/useGlobalStyled';

import {
    AppearanceCard,
    AppInfo,
    HeaderSettings,
    LogoutCard,
    ProfileCard,
    SectionSettings
} from './components';


export const SettingsScreen = () => {

    const { styledGlobal } = useGlobalStyles();

    return (
        <SafeAreaView style={styledGlobal.background}>
            <HeaderSettings />
            <View style={styledGlobal.content}>
                {/* User Profile Section */}
                <SectionSettings title="Profile">
                    <ProfileCard />
                </SectionSettings>
                {/* Appearance Section */}
                <SectionSettings title="Appearance" >
                    <AppearanceCard />
                </SectionSettings>
                {/* Account Section */}
                <SectionSettings title="Account" >
                    <LogoutCard />
                </SectionSettings>
                {/* App Info */}
                <AppInfo />
            </View>
        </SafeAreaView>
    )
}
