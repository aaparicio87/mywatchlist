import { StyleSheet } from "react-native";


export const globalStyles = (colors: any) => StyleSheet.create({
    
    background: {
        flex: 1,
        backgroundColor: colors.background
    },

    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
   
})