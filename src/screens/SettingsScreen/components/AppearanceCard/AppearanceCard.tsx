import { View, Text } from 'react-native'
import { Switch } from '@rneui/base'
import Ionicons from '@expo/vector-icons/Ionicons';

import { useGlobalThemeContextContext } from '@/contexts/ThemeContext/ThemeContext';
import { createStyles } from './styled';


export const AppearanceCard = () => {
    const { colors, colorScheme, toggleTheme } = useGlobalThemeContextContext();
    const styles = createStyles(colors)

    return (
        <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
                {colorScheme === 'dark' ? (
                    <Ionicons name="moon" size={20} color={colors.text} />
                ) : (
                    <Ionicons name="sunny" size={20} color={colors.text} />
                )}
                <Text style={styles.settingLabel}>Dark Mode</Text>
            </View>
            <Switch
                value={colorScheme === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: colors.border, true: colors.primary }}
                thumbColor={colors.white}
            />
        </View>
    )
}