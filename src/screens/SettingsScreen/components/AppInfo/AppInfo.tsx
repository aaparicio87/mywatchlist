import { View, Text } from 'react-native'

import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { createStyles } from './styled';

export const AppInfo = () => {
    const { colors } = useGlobalStyles();
    const styles = createStyles(colors)

    return (
        <View style={styles.footer}>
            <Text style={styles.appVersion}>MyWatchlist v0.0.1</Text>
            <Text style={styles.appDescription}>
                Track your favorite financial instruments with real-time updates
            </Text>
        </View>
    )
}