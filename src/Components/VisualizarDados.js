import React, { Component } from "react";
import { View, Text } from "react-native";

export default class VisualizarDados extends Component {
    render() {
        return (
            <View>
            <Text></Text>
            
            <Text>Descrição: {this.props.descricao}</Text>
            <Text>Data de Término: {this.props.dataTermino}</Text>
            <Text>Prioridade: {this.props.prioridade}</Text>
            <Text></Text>
        </View>
        )
    }
}