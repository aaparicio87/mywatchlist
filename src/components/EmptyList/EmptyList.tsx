import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { createStyles } from './styled';

interface EmptyStateProps {
    type: 'search' | 'favorites' | 'watchlist';
    message?: string;
}


export const EmptyList = ({ type, message }: EmptyStateProps) => {
    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    const getIcon = () => {
        switch (type) {
            case 'search':
                return <Ionicons name="search" size={48} color={colors.textSecondary} />;
            case 'favorites':
                return <Ionicons name="star" size={48} color={colors.textSecondary} />;
            case 'watchlist':
                return <Ionicons name="trending-up" size={48} color={colors.textSecondary} />;
            default:
                return <Ionicons name="search" size={48} color={colors.textSecondary} />;
        }
    };

    const getDefaultMessage = () => {
        switch (type) {
            case 'search':
                return 'Search for stocks, crypto, or forex instruments';
            case 'favorites':
                return 'No favorites yet. Star instruments to add them here.';
            case 'watchlist':
                return 'Your watchlist is empty. Add instruments to get started.';
            default:
                return 'No items found';
        }
    };

    return (
        <View style={styles.container}>
            {getIcon()}
            <Text style={styles.message}>
                {message || getDefaultMessage()}
            </Text>
        </View>
    );
}
