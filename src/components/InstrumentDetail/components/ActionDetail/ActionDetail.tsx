import { View } from 'react-native'
import { Button } from '@rneui/themed';

import { useGlobalStyles } from '@/hooks/useGlobalStyled';

import styles from './styled';


interface IProps {
    handleRemoveFromWatchlist: () => void
    handleCancel: () => void
    isFavorite: boolean
}

export const ActionDetail = ({ handleRemoveFromWatchlist, handleCancel, isFavorite }: IProps) => {
    const { colors } = useGlobalStyles();

    return (
        <View style={styles.actionsContainer}>
            <Button
                icon={{
                    type: 'ionicon',
                    name: 'exit',
                    color: colors.white
                }}
                onPress={handleCancel}
            >
                Close
            </Button>
            {
                isFavorite && (
                    <Button
                        icon={{
                            type: 'ionicon',
                            name: 'trash',
                            color: colors.white
                        }}
                        onPress={handleRemoveFromWatchlist}
                        color="error"
                    >
                        Remove from Watchlist
                    </Button>
                )}
        </View>
    )
}
