import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
     header: {
        padding: 20,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: colors.text,
        marginLeft: 12,
    },
});