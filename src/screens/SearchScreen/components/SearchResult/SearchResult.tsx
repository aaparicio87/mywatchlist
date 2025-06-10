import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { Instrument } from '@/reducers/watchList'
import { createStyles } from './styled'
import { useGlobalStyles } from '@/hooks/useGlobalStyled'

interface IProps {
    item: Instrument
    handleAddToWatchlist: (instrumentId: string) => void
}

export const SearchResult = ({ item, handleAddToWatchlist }: IProps) => {

    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    const price = item.price.toLocaleString(undefined, {
        minimumFractionDigits: item.category === 'forex' ? 4 : 2,
        maximumFractionDigits: item.category === 'forex' ? 4 : 2,
    })

    const upperCattegory = item.category.toUpperCase()

    const handleAdd = () => {
        handleAddToWatchlist(item.id)
    }

    return (
        <View style={styles.resultItem}>
            <View style={styles.resultInfo}>
                <View style={styles.symbolContainer}>
                    <Text style={styles.symbol}>{item.symbol}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{upperCattegory}</Text>
                </View>
            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.price}>
                    {price}
                </Text>
                {!item.isInWatchlist && (
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={handleAdd}
                    >
                        <Ionicons name="add" size={16} color={colors.white} />
                        <Text style={styles.addButtonText}>Add</Text>
                    </TouchableOpacity>
                )}
                {item.isInWatchlist && (
                    <View style={styles.addedBadge}>
                        <Text style={styles.addedText}>Added</Text>
                    </View>
                )}
            </View>
        </View>
    )
}
