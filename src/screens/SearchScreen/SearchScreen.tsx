import React from 'react'
import { FlatList } from 'react-native'

import { EmptyList, TabLayout } from '@/components'
import { useWatchListContextContext } from '@contexts/WatchListContext/WatchListContext'
import { Instrument } from '@/reducers/watchList'
import { useGlobalStyles } from '@/hooks/useGlobalStyled'

import { SearchInput, SearchSugestion } from './components'
import { createStyles } from './styled'
import { SearchResult } from './components/SearchResult/SearchResult'


export const SearchScreen = () => {
    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    const [searchQuery, setSearchQuery] = React.useState('');

    const {
        watchList: {
            searchResults
        },
        searchInstruments,
        addToWatchlist
    } = useWatchListContextContext()

    const handleSearch = (text: string) => {
        setSearchQuery(text);
        searchInstruments(text);
    };

    const handleAddToWatchlist = (instrumentId: string) => {
        addToWatchlist(instrumentId);
    };

    const renderSearchResult = ({ item }: { item: Instrument }) => (
        <SearchResult
            item={item}
            handleAddToWatchlist={handleAddToWatchlist}
        />
    )

    const messageEmtyList = `No results found ${searchQuery.length ? `for ${searchQuery}` : ''}`

    return (
        <TabLayout
            totalText={`Find stocks, crypto, and forex to add to your watchlist`}
            title="Search Instruments"
            customStyles={{ flex: 1 }}
            iconColor={colors.primary}
            iconName="searchengin"
        >
            <SearchInput
                searchQuery={searchQuery}
                handleSearch={handleSearch}
            />
            {searchQuery === '' && <SearchSugestion handleSearch={handleSearch} />}
            <FlatList
                data={searchResults}
                renderItem={renderSearchResult}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.resultsList}
                ListEmptyComponent={<EmptyList type="search" message={messageEmtyList} />}
            />
        </TabLayout>
    )
}