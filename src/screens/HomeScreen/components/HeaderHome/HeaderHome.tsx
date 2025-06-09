import React from 'react'
import { View, Text } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { useGlobalStyles } from '@/hooks/useGlobalStyled'
import { createStyles } from './styled'

interface IProps {
    totalWatchlistInstruments: number
}

export const HeaderHome = ({ totalWatchlistInstruments }: IProps) => {

    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    return (
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <FontAwesome6 name="chart-bar" size={24} color={colors.primary} />
                <Text style={styles.title}>My Watchlist</Text>
            </View>
            <Text style={styles.subtitle}>
                {`${totalWatchlistInstruments} instruments`}
            </Text>
        </View>
    )
}