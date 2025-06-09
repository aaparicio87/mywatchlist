import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
     footer: {
        marginTop: 'auto',
        alignItems: 'center',
        paddingTop: 20,
    },
    appVersion: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.textSecondary,
        marginBottom: 4,
    },
    appDescription: {
        fontSize: 12,
        color: colors.textSecondary,
        textAlign: 'center',
        lineHeight: 18,
    },
});