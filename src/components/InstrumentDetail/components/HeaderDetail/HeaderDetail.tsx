import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

import { useGlobalStyles } from '@/hooks/useGlobalStyled'
import { createStyles } from './styled'

interface IProps {
    handleFavoritePress: () => Promise<void>
    loading: boolean
    handleClose: () => void
    iconName: string
    iconColor: string

}

export const HeaderDetail = ({
    handleClose,
    handleFavoritePress,
    loading,
    iconName,
    iconColor
}: IProps) => {

    const { colors } = useGlobalStyles();
    const styles = createStyles(colors);

    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerTitle}>Details</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity
                    style={styles.favoriteButton}
                    onPress={handleFavoritePress}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator size={20} color={colors.star} />
                    ) : (
                        <Ionicons
                            name={iconName as "star" | "star-outline"}
                            size={22}
                            color={iconColor}
                        />
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={handleClose}
                >
                    <Ionicons name="close" size={24} color={colors.text} />
                </TouchableOpacity>
            </View>
        </View>
    )
}