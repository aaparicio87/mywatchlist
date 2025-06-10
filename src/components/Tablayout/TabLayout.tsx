import React, { PropsWithChildren } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import { useGlobalStyles } from '@/hooks/useGlobalStyled'
import { createStyles } from './styled'

type TProps = PropsWithChildren & {
    totalText: string
    title: string
    iconName: string
    iconColor: string
    iconSize?: number
}

export const TabLayout = ({
    totalText,
    title,
    children,
    iconName,
    iconColor,
    iconSize = 24
}: TProps) => {

    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    return (
        <SafeAreaView style={{ backgroundColor: colors.background }}>
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <FontAwesome6 name={iconName} size={iconSize} color={iconColor} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.subtitle}>
                    {totalText}
                </Text>
            </View>
            {children}
        </SafeAreaView>
    )
}