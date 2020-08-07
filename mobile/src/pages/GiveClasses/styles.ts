import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        backgroundColor: '#8657e5'
    },

    content: {
        flex: 1,
        justifyContent: "center",
    },

    title: {
        maxWidth: 180,
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        lineHeight: 37,
        color: '#fff'
    },

    description: {
        marginTop: 24,
        maxWidth: 240,
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 26
    },

    okButton: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 40,
        height: 58,
        backgroundColor: '#04d361',
        borderRadius: 8
    },

    okButtonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#fff'
    }
});

export default styles;