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
import { Notification } from "../Components/NotificationConfig";

const notificador = Notification

export default class App extends Component {
    constructor(props) {
      super(props)
      this.localNotify = null;
    }

    
    componentDidMount() {
      notificador.configure();
    }

    onPressSendNotification = () => {
      notificador.showNotification(
        1,
        "Esse é o nosso título",
        "E aqui está a mensagem. Vamos inserir uma mensagem um pouco mais longa para vermos o Android irá se adaptar ao conteúdo na tela?",
        {}, // data
        {} // options
      )
    }

    onPressCancelAllLocalNotification = () => {
      notificador.cancelAllLocalNotification()
    }

    render() {
      let {container, button} = styles

      return(
        <View style={container}>
          <TouchableOpacity 
            style={button}
            onPress={this.onPressSendNotification}
          >
            <Text>Enviar notificação</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={button}
            onPress={this.onPressCancelAllLocalNotification}>
            <Text>Cancelar notificações</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  /* Estilização do projeto */
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center'
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: 200,
      marginTop: 10
    }
  });