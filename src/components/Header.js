import React, { Component } from "react";
import { Header, Left, Body, Button, Icon, Title } from "native-base";

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
      </Header>
    );
  }
}
