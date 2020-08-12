import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#fdfffc'
    },
    contentInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dddd',
        height: 50,
        alignSelf: 'center',
        paddingHorizontal: 10
    },
    input: {
        flex: 1,
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: '#011627',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    textButton: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold'
    }
});

export default styles;