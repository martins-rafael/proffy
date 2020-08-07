import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList: {
        marginTop: -40
    },

    searchFrom: {
        marginBottom: 24
    },

    label: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        justifyContent: 'center',
        marginTop: 4,
        marginBottom: 16,
        paddingHorizontal: 16,
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8
    },

    submitButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#04d361',
        borderRadius: 8
    },

    submitButtonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#fff'
    }

})

export default styles;