import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#eeee'
    },
    header: {
        backgroundColor: '#0f0c29',
        elevation: 2,
        height: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 25,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        
    },
    titleName: {
        fontSize: 22,
        color: '#fff'
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 120,
        marginTop: 10,
        padding: 15
    },

    name: {
        color: '#444',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 2
    },
    desc: {
        color: '#666',
        textAlign: 'center',
        fontSize: 15
    }
});

export default styles