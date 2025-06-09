import { StyleSheet } from "react-native";

export const createStyles = (colors: any) => StyleSheet.create({
     header: {
     padding: 20,
     paddingBottom: 16,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: colors.text,
        marginLeft: 12,
    },
    subtitle: {
        fontSize: 14,
        color: colors.text,
        marginLeft: 36,
    },
})