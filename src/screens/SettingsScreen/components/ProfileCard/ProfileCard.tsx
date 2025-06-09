import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { useAuthContextContext } from '@/contexts/AuthContext/AuthContext';
import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { createStyles } from './styled'


export const ProfileCard = () => {
    const { user } = useAuthContextContext()
    const { colors } = useGlobalStyles();
    const styles = createStyles(colors)

    return (
        <View style={styles.profileCard}>
            <View style={styles.profileIcon}>
                <Ionicons name="person" size={24} color={colors.primary} />
            </View>
            <View style={styles.profileInfo}>
                <Text style={styles.profileName}>{user?.name ?? '--'}</Text>
                <Text style={styles.profileEmail}>{user?.email ?? '--'}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
        </View>
    )
}