import { Link } from "@react-navigation/native"
import { View, StyleSheet, Text } from "react-native";

function Navibar() {
    return (
        <View style={estilo.cabecario}>
            <Text style={estilo.titulo}>MHIN</Text>

            <View style={estilo.alinhamentotexto}>
                <Link style={estilo.espacamentotexto} to="/Home">HOME</Link>
                <Link style={estilo.espacamentotexto} to="/Cadastro" >CADASTRO</Link>
                <Link style={estilo.espacamentotexto} to="/Lista" >LISTA</Link>
            </View>

        </View>
    )
}

export default Navibar
const estilo = StyleSheet.create({
    cabecario: {
        display: "flex",
        justifyContent: 'space-between',
        backgroundColor: '#cdcdcd',
        padding: 10,
        flexDirection: 'row'
    },
    alinhamentotexto: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    espacamentotexto: {
        marginRight: 22,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    },
    logotexto: {
        color: '#ffffff'
    },
    titulo: {
        marginRight: 95,
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 1
    }

})
