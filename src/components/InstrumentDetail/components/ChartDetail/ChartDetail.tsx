import { View, Text, useWindowDimensions } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CartesianChart, Line } from 'victory-native';

import { useGlobalStyles } from '@/hooks/useGlobalStyled';
import { Instrument } from '@/reducers/watchList';

import { createStyles } from './styled';


interface IProps {
    instrument: Instrument
}


export const ChartDetail = ({ instrument }: IProps) => {
    const { colors } = useGlobalStyles();
    const styles = createStyles(colors);

    const { width } = useWindowDimensions();

    const chartData = instrument.historicalData.slice(-15).map((price, index) => ({
        x: index + 1,
        y: price
    }));

    return (
        <View style={styles.chartContainer}>
            <View style={styles.chartHeader}>
                <FontAwesome6 name="chart-bar" size={20} color={colors.primary} />
                <Text style={styles.chartTitle}>Price Chart (15 periods)</Text>
            </View>

            <View style={[styles.chartWrapper, { width: width - 42 }]}>
                <CartesianChart data={chartData} xKey="x" yKeys={["y"]} >
                    {({ points }) => (
                        <Line
                            points={points.y}
                            color={colors.primary}
                            strokeWidth={3}
                            animate={{ type: "spring" }}
                        />
                    )}
                </CartesianChart>
            </View>
        </View>
    )
}