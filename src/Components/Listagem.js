import React, { Component } from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";

export default class Listagem extends Component {

    getEstilo = () => {
        if (this.props.status == "Atrasado") {
            return { color: 'red'}
        } else if (this.props.status == "Entregue") {
            return { color: 'green'}
        } else if (this.props.status == "Em Andamento") {
            return { color: 'blue'}
        } else {
            return { color: 'indigo'}
        }

    }

    render() {
        return (
            <View style={{ backgroundColor: 'lightgrey', margin: 10, padding: 10, borderRadius: 15 }}>
                <Text>ID: {this.props.id}</Text>
                <Text>Descricao da Escola: {this.props.descricao}</Text>
                <Text>Número de Alunos: {this.props.dataTermino}</Text>
                <Text>Data da Visita: {this.props.prioridade}</Text>
                <Text style={this.getEstilo()}>Status: {this.props.status}</Text>
                <View style={{flexDirection: 'row', marginTop: 10}}>
                <TouchableOpacity style={{flex: 1, backgroundColor: 'red', height: 25, padding: 2, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }} onPress={() => this.props.atrasado(this.props.id)}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>ATRASADO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1, backgroundColor: 'green', height: 25, padding: 2, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }} onPress={() => this.props.concluido(this.props.id)}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>CONCLUÍDO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1, backgroundColor: 'black', height: 25, padding: 2, margin: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }} onPress={() => this.props.excluir(this.props.id)}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>EXCLUIR</Text>
                </TouchableOpacity>
                </View>
                <Text></Text>
            </View>
        )
    }
}