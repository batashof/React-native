import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import { Dimensions } from "react-native";
const win = Dimensions.get("window");

export default class NewsPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{this.props.title}</Text>
                <Text note>{this.props.theme}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: this.props.image }}
                style={{ height: 200, width: win.width - 75, flex: 1 }}
              />
              <Text>{this.props.text}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
