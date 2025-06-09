import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
    section: {
     marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.text,
        marginBottom: 12,
    },
});