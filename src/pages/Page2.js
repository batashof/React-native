import React, { Component } from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import { Container } from "native-base";

export default class Page2 extends Component {
  render() {
    return (
      <Container>
        <Header navigation={this.props.navigation} />
      </Container>
    );
  }
}
