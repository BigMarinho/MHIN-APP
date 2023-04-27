import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Listagem from "../Components/Listagem";
import Navibar from "../Components/Navibar";
import Database from "../Database/Database";
import Tarefa from "../Models/Tarefa";

export default class Cadastro extends Component {
  //criacao dos States
  constructor(props) {
    super(props);
    this.state = {
      descricao: "",
      dataTermino: "",
      prioridade: "",
      status: "",
      lista: []
    };
  }

  Cadastrar = (descricao, dataTermino, prioridade, status) => {
    const db = new Database();
    const novaTarefa = new Tarefa(descricao, dataTermino, prioridade, status);
    db.Adicionar(novaTarefa);
  };

  render() {
    return (
      <ScrollView style={estilo.flex}>
        <Navibar />
        <Text></Text>
        <View>
          <Text style={estilo.titulo}>CADASTRO DE EXCURSÕES</Text>
          <TextInput
            style={estilo.input}
            onChangeText={(textoDigitado) =>
              this.setState({ descricao: textoDigitado })
            }
            placeholder="Nome da Escola"
          />
          <TextInput
            style={estilo.input}
            onChangeText={(textoDigitado) =>
              this.setState({ dataTermino: textoDigitado })
            }
            placeholder="Número de Alunos"
          />
          <TextInput
            style={estilo.input}
            onChangeText={(textoDigitado) =>
              this.setState({ prioridade: textoDigitado })
            }
            placeholder="Data de Visita"
          />
          <TextInput
            style={estilo.input}
            onChangeText={(textoDigitado) =>
              this.setState({ status: textoDigitado })
            }
            placeholder="Status do Agendamento"
          />
          <TouchableOpacity
            style={estilo.botao}
            onPress={() => {
              this.Cadastrar(
                this.state.descricao,
                this.state.dataTermino,
                this.state.prioridade,
                this.state.status
              );
            }}
          >
            <Text style={estilo.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginBottom: 160 }}></Text>
      </ScrollView>
    );
  }
}

const estilo = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 30,
    marginTop: 20,
    color: "#000"
  },
  input: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "bold",
    backgroundColor: "#cecece",
    height: 25,
    paddingLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 10,
    height: 40
  },
  botao: {
    padding: 2,
    backgroundColor: "green",
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
    marginTop: 30
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});