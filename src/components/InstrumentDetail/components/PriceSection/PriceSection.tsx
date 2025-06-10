import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { createStyles } from './styled';
import { Instrument } from '@/reducers/watchList';

interface IProps {
    instrument: Instrument
    isPositive: boolean
    changeColor: string
}

export const PriceSection = ({ instrument, changeColor, isPositive }: IProps) => {
    const { colors } = useGlobalStyles();
    const styles = createStyles(colors);

    return (
        <View style={styles.priceSection}>
            <Text style={styles.price}>
                {` ${instrument.price.toLocaleString(undefined, {
                    minimumFractionDigits: instrument.category === 'forex' ? 4 : 2,
                    maximumFractionDigits: instrument.category === 'forex' ? 4 : 2,
                })}`}
            </Text>
            <View style={[styles.changeContainer, { backgroundColor: changeColor + '20' }]}>
                {isPositive ? (
                    <Ionicons name="trending-up" size={16} color={changeColor} />

                ) : (
                    <Ionicons name="trending-down" size={16} color={changeColor} />
                )}
                <Text style={[styles.changeText, { color: changeColor }]}>
                    {isPositive ? '+' : ''}{instrument.change.toFixed(2)} ({instrument.changePercent.toFixed(2)}%)
                </Text>
            </View>
        </View>
    )
}