import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    input: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#446ab3',
        borderBottomWidth: 2,
        marginHorizontal: 5,
        marginVertical: 20,
        fontSize: 18,
        color: '#446ab3'

    },
    searchButton: {
        padding: 20,
        backgroundColor: '#446ab3',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 6,
    },
    searchButtonText: {
        fontSize: 18,
        color: '#fff'
    }
});