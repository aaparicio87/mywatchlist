import { View } from 'react-native'
import { Input } from '@rneui/base'

import { useGlobalStyles } from '@/hooks/useGlobalStyled'

import { createStyles } from './styled'

interface ISearchProps {
    searchQuery: string
    handleSearch: (text: string) => void
}

export const SearchInput = ({ handleSearch, searchQuery }: ISearchProps) => {
    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    return (
        <View style={styles.searchContainer}>
            <Input
                leftIcon={{ type: 'ionicon', name: 'search', color: colors.textSecondary, size: 20 }}
                placeholder="Search by symbol or name..."
                value={searchQuery}
                onChangeText={handleSearch}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    )
}