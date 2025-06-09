import { StyleSheet } from "react-native";

export const loginStyles=(colors: any)=>StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
    },
    content: {
        flex:3,
        alignItems: 'center',
        gap: 20,
    },
    button:{
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
    buttonText: { 
        fontWeight: '500', 
        fontSize: 18,
        color: colors.text,
    },
    buttonContainer: {
        marginHorizontal: 50,
        height: 50,
        width: 200,
        marginVertical: 10,
    },
    error: {
        color: colors.error,
    },
    title: { 
        flex: 2, 
        alignItems: 'center', 
        justifyContent: 'center' ,
        gap: 10
    }
    
})