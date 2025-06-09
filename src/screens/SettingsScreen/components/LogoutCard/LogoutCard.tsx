import { Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { createStyles } from './styled';

export const LogoutCard = () => {
    const { colors } = useGlobalStyles();
    const styles = createStyles(colors)

    return (
        <TouchableOpacity style={styles.logoutButton} onPress={() => { }}>
            <Ionicons name="exit" size={20} color={colors.error} />
            <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
    )
}
