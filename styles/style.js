import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1f1f1f'
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 320,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    input: {
        backgroundColor: '#F5F5F5',
        width: 300,
        padding: 5,
        borderRadius: 5,
        marginTop: 30,
        fontSize: 17,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '900',
        marginBottom: 10
    },
    welcomeTitle: {
        fontSize: 25,
    },
    text: {
        fontSize: 23,
    },
    cityText: {
        fontWeight: '900',
        fontSize: 25
    },
    weatherText: {
        fontWeight: '600',
        fontSize: 20
    },
    button: {
        width: 100,
        padding: 5,
        backgroundColor: '#1aa7ec',
        borderRadius: 20,
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff'
    },
});

export default styles;