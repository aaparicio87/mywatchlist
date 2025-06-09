import { View, Text } from 'react-native'

import { useGlobalStyles } from '@/hooks/useGlobalStyled'
import { createStyles } from './styled'

export const HeaderSettings = () => {
    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    return (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Settings</Text>
            </View>
        </View>
    )
}