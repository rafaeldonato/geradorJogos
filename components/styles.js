import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        margin: 2,  
    },

    containerResultado: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: 'black',
        borderRadius: 10,
           

    },

    textInputJogos: {
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        width: 120,
        height: 60,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        color: 'black',

        //alinha o item na tela
        alignSelf: 'center',
    },

    textInputConc: {
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        width: 120,
        height: 60,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        color: 'black',

        //alinha o item na tela
        alignSelf: 'center',
    },

    textInputDezenas: {
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        width: 50,
        height: 50,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        color: 'black',
        margin: 5,
        alignSelf: 'center',
    },

    textInputEmail: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        width: 250,
        height: 45,
        alignItems: 'center',
        fontSize: 18,
        marginBottom: 20,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 10,
        color: 'black',
        alignSelf: 'center',
    },

    svResult: {
        backgroundColor: 'black',
        borderColor: 'white',
        borderRadius: 8,
        borderWidth: 2,
        width: 300,
        height: 'auto',
        alignSelf: 'center',


    },

    email: {
        backgroundColor: '#f5f5f5',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        width: 300,
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        margin: 10,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 8,
        color: 'black',
    },

    button: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        borderRadius: 10,
        width: 200,
        height: 50,
        marginTop: 10,
        marginBottom: 30,

        alignSelf: 'center',

    },

    buttonEmail: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        borderRadius: 10,
        width: 220,
        height: 40,
        margin: 10,
        alignSelf: 'center',

    },

    text: {
        color: 'white',
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
        alignSelf: 'center',
        padding: 5,
        letterSpacing: 2,




    },


    tituloMain: {
        backgroundColor: "#000000",
        color: 'white',
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        width: 400
        
    },

    titulo: {
        color: '#006400',
        fontSize: 18,
        padding: 5,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
        alignSelf: 'center',

    },

});   

export default styles;