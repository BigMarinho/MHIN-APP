import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput, ScrollView, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import Listagem from "../Components/Listagem";
import Icon from 'react-native-vector-icons/Ionicons'
import Database from "../Database/Database";
import Navibar from "../Components/Navibar";

export default class Lista extends Component {
  //criacao dos States
  constructor(props) {
    super(props);
    this.state = {
      descricao: "",
      dataTermino: "",
      prioridade: "",
      status: "",
      lista: []
    }

    this.Listar()
  }

  Listar = () => {
    const db = new Database();
    db.ListarTodos().then(data => { this.setState({ lista: data }) })
  }

  Deletar = (id) => {
    const db = new Database();
    db.Remover(id);
    this.Listar();
  }

  Concluido = (id) => {
    const db = new Database();
    db.UpdateConcluido(id);
    this.Listar();
  }

  Aberto = (id) => {
    const db = new Database();
    db.UpdateAberto(id);
    this.Listar();
  }

  Atrasado = (id) => {
    const db = new Database();
    db.UpdateAtrasado(id);
    this.Listar();
  }

  render() {
    return (
        <SafeAreaView style={estilo.flex}>
          <Navibar />
          <Text style={estilo.titulo}>LISTA DE AGENDAMENTOS</Text>
          <TouchableOpacity onPress={() => this.Listar()} style={estilo.botaoAtualizar}>
            <Text ><Icon name="refresh-circle-sharp" size={18} /> Clique Para Atualizar a Lista </Text>
          </TouchableOpacity>
          <FlatList
            initialNumToRender={3}
            keyExtractor={item => item.id}
            data={this.state.lista}
            renderItem={({ item }) =>
              <Listagem
                id={item.id}
                descricao={item.descricao}
                dataTermino={item.dataTermino}
                prioridade={item.prioridade}
                status={item.status}
                concluido={this.Concluido}
                aberto={this.Aberto}
                atrasado={this.Atrasado}
                excluir={this.Deletar}
              />
            }
          />
        </SafeAreaView>
    )
  }
}

const estilo = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 40,
    color: "#000"
  },
  botaoAtualizar: {
    fontWeight: 'bold',
    backgroundColor: '#cecece',
    marginLeft: 260,
    height: 30,
    padding: 6,
    marginHorizontal: 12,
    marginBottom: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
})