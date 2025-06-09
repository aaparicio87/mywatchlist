import React from 'react'
import { View, Text } from 'react-native'

import { useGlobalStyles } from '@/hooks/useGlobalStyled'

const HomeScreen = () => {
    const { styledGlobal } = useGlobalStyles()
    return (
        <View style={[styledGlobal.centerContainer]}>
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen