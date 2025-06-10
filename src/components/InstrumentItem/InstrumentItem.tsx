import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Instrument } from '@reducers/watchList';
import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { createStyles } from './styled';

interface InstrumentItemProps {
    instrument: Instrument;
    showFavoriteButton?: boolean;
    showRemoveButton?: boolean;
    toggleFavorite: (instrumentId: string) => void;
    removeFromWatchlist: (instrumentId: string) => void;
    openDetail: (instrument: Instrument) => void
}

export function InstrumentItem({
    instrument,
    showFavoriteButton = true,
    showRemoveButton = false,
    toggleFavorite,
    removeFromWatchlist,
    openDetail
}: InstrumentItemProps) {

    const { colors } = useGlobalStyles();
    const styles = createStyles(colors);

    const handlePress = () => {
        openDetail(instrument);
    };

    const handleFavoritePress = (e: any) => {
        e.stopPropagation();
        toggleFavorite(instrument.id);
    };

    const handleRemovePress = (e: any) => {
        e.stopPropagation();
        removeFromWatchlist(instrument.id);
    };

    const isPositive = instrument.change >= 0;
    const changeColor = isPositive ? colors.positive : colors.negative;

    const formatPrice = (price: number, category: string) => {
        if (category === 'crypto' && price < 1) {
            return price.toLocaleString(undefined, {
                minimumFractionDigits: 4,
                maximumFractionDigits: 6,
            });
        } else if (category === 'forex') {
            return price.toLocaleString(undefined, {
                minimumFractionDigits: 4,
                maximumFractionDigits: 4,
            });
        } else {
            return price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        }
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
            activeOpacity={0.7}
        >
            <View style={styles.leftSection}>
                <View style={styles.symbolContainer}>
                    <Text style={styles.symbol}>{instrument.symbol}</Text>
                    <Text style={styles.name}>{instrument.name}</Text>
                </View>
                <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>
                        {instrument.category.toUpperCase()}
                    </Text>
                </View>
            </View>

            <View style={styles.rightSection}>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>
                        ${formatPrice(instrument.price, instrument.category)}
                    </Text>
                    <View style={[
                        styles.changeContainer,
                        { backgroundColor: changeColor + '20' }
                    ]}>
                        <Ionicons
                            name={isPositive ? "trending-up" : "trending-down"}
                            size={12}
                            color={changeColor}
                        />
                        <Text style={[styles.changeText, { color: changeColor }]}>
                            {isPositive ? '+' : ''}{instrument.changePercent.toFixed(2)}%
                        </Text>
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    {showFavoriteButton && (
                        <TouchableOpacity
                            onPress={handleFavoritePress}
                            style={[
                                styles.favoriteButton,
                                instrument.isFavorite && styles.favoriteButtonActive
                            ]}
                            activeOpacity={0.7}
                        >
                            <Ionicons
                                name={instrument.isFavorite ? "star" : "star-outline"}
                                size={22}
                                color={instrument.isFavorite ? colors.star : colors.textSecondary}
                            />
                        </TouchableOpacity>
                    )}
                    {showRemoveButton && (
                        <TouchableOpacity
                            onPress={handleRemovePress}
                            style={styles.removeButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.removeText}>Remove</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}