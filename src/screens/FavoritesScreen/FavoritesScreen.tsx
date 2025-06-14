import React from 'react'
import { FlatList, View } from 'react-native'

import { useGlobalStyles } from '@/hooks/useGlobalStyled'
import { useWatchListContextContext } from '@/contexts/WatchListContext/WatchListContext'
import { Instrument } from '@reducers/watchList'
import { EmptyList, InstrumentDetail, InstrumentItem, TabLayout } from '@/components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const FavoritesScreen = () => {
    const insets = useSafeAreaInsets();
    const { colors } = useGlobalStyles()
    const {
        loadPersistedData,
        watchList: {
            instruments,
            favorites,
            visbleDetail,
            instrumentDetail
        },
        toggleFavorite,
        removeFromWatchlist,
        handleCloseDetail,
        openDetail
    } = useWatchListContextContext()

    React.useEffect(() => {
        loadPersistedData()
    }, [])

    const favoriteInstruments = instruments.filter(instrument =>
        favorites.includes(instrument.id)
    )

    const renderInstrument = ({ item }: { item: Instrument }) => (
        <InstrumentItem
            instrument={item}
            toggleFavorite={toggleFavorite}
            removeFromWatchlist={removeFromWatchlist}
            openDetail={openDetail}
        />
    )

    return (
        <TabLayout
            iconColor={colors.star}
            iconName='star'
            title='Favorites'
            totalText={`${favoriteInstruments.length} favorites`}
            customStyles={{ flex: 1 }}
        >
            <FlatList
                data={favoriteInstruments}
                renderItem={renderInstrument}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: insets.bottom + 70 }}
                ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
                ListEmptyComponent={<EmptyList type="favorites" />}
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