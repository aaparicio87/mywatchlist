import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

import { TSortBy, TSortOrder } from '@reducers/watchList'
import { useGlobalStyles } from '@hooks/useGlobalStyled';
import { createStyles } from './styled';

interface IProps {
    label: string,
    value: TSortBy,
    sortBy: TSortBy,
    sortOrder: TSortOrder
    toggleSortOrder: () => void
    setSortBy: (sortBy: TSortBy) => void
}

export const SortButton = ({
    label,
    value,
    sortBy,
    toggleSortOrder,
    setSortBy,
    sortOrder
}: IProps) => {

    const { colors } = useGlobalStyles()
    const styles = createStyles(colors)

    const handlePress = () => {
        if (sortBy === value) {
            toggleSortOrder();
        } else {
            setSortBy(value);
        }
    }

    return (
        <TouchableOpacity
            style={[
                styles.sortButton,
                sortBy === value && styles.sortButtonActive
            ]}
            onPress={handlePress}
        >
            <Text style={[
                styles.sortButtonText,
                sortBy === value && styles.sortButtonTextActive
            ]}>
                {label}
            </Text>
            {sortBy === value && (
                sortOrder === 'asc' ?
                    <Ionicons name="chevron-up" size={16} color={colors.white} /> :
                    <Ionicons name="chevron-down" size={16} color={colors.white} />
            )}
        </TouchableOpacity>
    )
}