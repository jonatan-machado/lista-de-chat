import React, { Component } from "react";
import { Platform, StyleSheet, View, FlatList } from "react-native";

import ListItem from "./src/ListItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: "1",
          img: "https://www.b7web.com.br/avatar1.png",
          nome: "Pedro",
          msg: "Eae meu!"
        },
        {
          key: "2",
          img: "https://www.b7web.com.br/avatar2.png",
          nome: "João",
          msg: "E o jogo?"
        },
        {
          key: "3",
          img: "https://www.b7web.com.br/avatar3.png",
          nome: "Luisa",
          msg: "Viu o roberto?"
        },
        {
          key: "4",
          img: "https://www.b7web.com.br/avatar1.png",
          nome: "Paulo",
          msg: "e a pelada?"
        },
        {
          key: "5",
          img: "https://www.b7web.com.br/avatar2.png",
          nome: "Carlos",
          msg: "como vai ser?"
        },
        {
          key: "6",
          img: "https://www.b7web.com.br/avatar3.png",
          nome: "Marcela",
          msg: "flw!"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "ios" ? 20 : 0
  }
});
