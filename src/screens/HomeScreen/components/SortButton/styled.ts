import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginRight: 8,
        backgroundColor: colors.primaryContainer,
        borderRadius: 16,
        borderWidth: 1,
  },
  sortButtonActive: {
    backgroundColor: colors.primary,
  },
  sortButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    marginRight: 4,
  },
  sortButtonTextActive: {
    color: colors.white,
  },
})