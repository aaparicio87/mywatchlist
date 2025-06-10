import { View, Text } from 'react-native'

import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { Instrument } from '@/reducers/watchList';

import { createStyles } from './styled';


interface IProps {
    instrument: Instrument
}

export const SymbolSection = ({ instrument }: IProps) => {
    const { colors } = useGlobalStyles();
    const styles = createStyles(colors);

    return (
        <View style={styles.symbolSection}>
            <Text style={styles.symbol}>{instrument.symbol}</Text>
            <Text style={styles.name}>{instrument.name}</Text>
            <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>
                    {instrument.category.toUpperCase()}
                </Text>
            </View>
        </View>
    )
}