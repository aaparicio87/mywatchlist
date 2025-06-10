import React from 'react'
import { FlatList, View, RefreshControl } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useGlobalStyles } from '@hooks/useGlobalStyled'
import { useWatchListContextContext } from '@contexts/WatchListContext/WatchListContext'
import { Instrument, TSortBy } from '@reducers/watchList'

import { SortButton } from './components'
import { EmptyList, InstrumentDetail, InstrumentItem, TabLayout } from '@/components';
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
    const insets = useSafeAreaInsets();
    const { colors } = useGlobalStyles()
    const {
        loadPersistedData,
        updatePrices,
        watchList: {
            instruments,
            watchlist,
            sortBy,
            sortOrder,
            visbleDetail,
            instrumentDetail
        },
        toggleSortOrder,
        setSortBy,
        toggleFavorite,
        removeFromWatchlist,
        handleCloseDetail,
        openDetail
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
            openDetail={openDetail}
        />
    ), [toggleFavorite, removeFromWatchlist]);

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
                contentContainerStyle={{ paddingBottom: insets.bottom + 70 }}
                ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
                ListEmptyComponent={<EmptyList type="watchlist" />}
            />
            {visbleDetail && <InstrumentDetail
                instrument={instrumentDetail}
                isVisible={visbleDetail}
                onClose={handleCloseDetail}
                toggleFavorite={toggleFavorite}
                removeFromWatchlist={removeFromWatchlist}
            />}
        </TabLayout>
    )
}