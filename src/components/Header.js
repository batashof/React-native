import React, { Component } from "react";
import { Header, Left, Body, Button, Icon, Title } from "native-base";

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.navigation.state.params.theme}</Title>
        </Body>
      </Header>
    );
  }
}
