import { useGlobalStyles } from '@/hooks/useGlobalStyled'
import { Instrument } from '@/reducers/watchList'
import { View, Text } from 'react-native'
import { createStyles } from './styled'

interface IProps {
  instrument: Instrument
}

interface IPropsItem {
  label: string
  value: string
}

const SectionItem = ({ label, value }: IPropsItem) => {
  const { colors } = useGlobalStyles()
  const styles = createStyles(colors)

  return (
    <View style={styles.statRow}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  )
}

export const StatsSection = ({ instrument }: IProps) => {
  const { colors } = useGlobalStyles()
  const styles = createStyles(colors)

  const statsConfig = [
    {
      key: 'marketCap',
      label: 'Market Cap',
      condition: !!instrument.marketCap,
      value: instrument.marketCap || '',
    },
    {
      key: 'volume',
      label: '24h Volume',
      condition: !!instrument.volume,
      value: instrument.volume || '',
    },
    {
      key: 'high24h',
      label: '24h High',
      condition: !!instrument.high24h,
      value: instrument.high24h?.toLocaleString(undefined, {
        minimumFractionDigits: instrument.category === 'forex' ? 4 : 2,
        maximumFractionDigits: instrument.category === 'forex' ? 4 : 2,
      }) || '',
    },
    {
      key: 'low24h',
      label: '24h Low',
      condition: !!instrument.low24h,
      value: instrument.low24h?.toLocaleString(undefined, {
        minimumFractionDigits: instrument.category === 'forex' ? 4 : 2,
        maximumFractionDigits: instrument.category === 'forex' ? 4 : 2,
      }) || '',
    }
  ]

  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsTitle}>Market Statistics</Text>

      {statsConfig
        .filter(item => item.condition)
        .map(item => (
          <SectionItem
            key={item.key}
            label={item.label}
            value={item.value}
          />
        ))}
    </View>
  )
}