import React from 'react'
import { FlatList, View, RefreshControl } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { useGlobalStyles } from '@hooks/useGlobalStyled'
import { useWatchListContextContext } from '@contexts/WatchListContext/WatchListContext'
import { Instrument, TSortBy } from '@reducers/watchList'

import { SortButton } from './components'
import { EmptyList, InstrumentItem, TabLayout } from '@/components';
import styles from './styled'

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

        <TabLayout
            totalText={`${watchlistInstruments.length} instruments`}
            title="My Watchlist"
            iconColor={colors.primary}
            iconName="chart-bar"
        >
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
                ListEmptyComponent={<EmptyList type="watchlist" />}
            />
        </TabLayout>
    )
}