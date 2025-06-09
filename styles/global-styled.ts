import { StyleSheet } from "react-native";


export const globalStyles = (colors: any) => StyleSheet.create({
    
    background: {
        flex: 1,
        backgroundColor: colors.background
    },

    content: {
        flex: 1,
        padding: 20,
    },

    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainResult: {
        color: colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
    },

    subresult: {
        color: colors.textPrimary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400',
    },
   
})