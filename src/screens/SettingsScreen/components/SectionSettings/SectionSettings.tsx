import React from 'react'
import { View, Text } from 'react-native'
import { createStyles } from './styled'
import { useGlobalStyles } from '@/hooks/useGlobalStyled'

interface IProps extends React.PropsWithChildren {
    title: string
}

export const SectionSettings = ({ title, children }: IProps) => {
    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {children}
        </View>
    )
}