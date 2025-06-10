import { View, Text, TouchableOpacity } from 'react-native'

import { useGlobalStyles } from '@/hooks/useGlobalStyled'

import { createStyles } from './styled'


interface IProps {
    handleSearch: (text: string) => void
}

export const SearchSugestion = ({ handleSearch }: IProps) => {
    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    return (
        <View style={styles.suggestionsContainer}>
            <Text style={styles.suggestionsTitle}>Popular Searches</Text>
            <View style={styles.suggestionTags}>
                {['Bitcoin', 'Apple', 'Tesla', 'Ethereum', 'EUR/USD'].map((tag) => (
                    <TouchableOpacity
                        key={tag}
                        style={styles.suggestionTag}
                        onPress={() => handleSearch(tag)}
                    >
                        <Text style={styles.suggestionTagText}>{tag}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}