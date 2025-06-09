import React from 'react'
import { FlatList, View, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

import { useGlobalStyles } from '@hooks/useGlobalStyled'
import { useWatchListContextContext } from '@contexts/WatchListContext/WatchListContext'
import { Instrument, TSortBy } from '@reducers/watchList'

import { HeaderHome, SortButton } from './components'
import styles from './styled'
import { InstrumentItem } from '@/components';

interface ISortLabel {
    label: string,
    value: TSortBy
}

const SORT_LABELS: ISortLabel[] = [{
    label: 'Name',
    value: 'name'
}, {
    label: 'Price',
    value: 'price'
}, {
    label: 'Change',
    value: 'change'
}]

export const HomeScreen = () => {
    const { colors } = useGlobalStyles()
    const {
        loadPersistedData,
        updatePrices,
        watchList: {
            instruments,
            watchlist,
            sortBy,
            sortOrder
        },
        toggleSortOrder,
        setSortBy,
        toggleFavorite,
        removeFromWatchlist
    } = useWatchListContextContext()

    const [refreshing, setRefreshing] = React.useState(false);

    React.useEffect(() => {
        loadPersistedData();

        // Update prices every 5 seconds
        const interval = setInterval(() => {
            updatePrices();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        updatePrices();
        setTimeout(() => setRefreshing(false), 1000);
    }, [updatePrices]);

    const watchlistInstruments = instruments.filter(instrument =>
        watchlist.includes(instrument.id)
    );

    const sortedInstruments = [...watchlistInstruments].sort((a, b) => {
        let comparison = 0;

        switch (sortBy) {
            case 'name':
                comparison = a.name.localeCompare(b.name);
                break;
            case 'price':
                comparison = a.price - b.price;
                break;
            case 'change':
                comparison = a.changePercent - b.changePercent;
                break;
        }

        return sortOrder === 'asc' ? comparison : -comparison;
    });

    const renderInstrument = React.useCallback(({ item }: { item: Instrument }) => (
        <InstrumentItem
            instrument={item}
            toggleFavorite={toggleFavorite}
            removeFromWatchlist={removeFromWatchlist}
        />
    ), []);

    return (
        <SafeAreaView style={{ backgroundColor: colors.background }}>
            <HeaderHome
                totalWatchlistInstruments={watchlistInstruments.length}
            />

            {watchlistInstruments.length > 0 && (
                <View style={styles.sortContainer}>
                    {SORT_LABELS.map(({ label, value }) => (
                        <SortButton
                            key={value}
                            label={label}
                            value={value}
                            sortBy={sortBy}
                            sortOrder={sortOrder}
                            toggleSortOrder={toggleSortOrder}
                            setSortBy={setSortBy}
                        />
                    ))}
                </View>
            )}

            <FlatList
                data={sortedInstruments}
                renderItem={renderInstrument}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={[colors.primary]}
                        tintColor={colors.primary}
                    />
                }
                ListEmptyComponent={() => <Ionicons name="trending-up" size={24} color="black" />}
            />
        </SafeAreaView>
    )
}