import React, { Component } from "react";
import {
  Header,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Content,
  Card,
  CardItem,
  Text,
  View,
  Container
} from "native-base";
import { ActivityIndicator, Image } from "react-native";
import { Dimensions } from "react-native";
import NewsAPI from "../../components/NewsAPI";
const win = Dimensions.get("window");

export default class NewsPage extends Component {
  constructor(props) {
    super(props);

    this.NewsAPI = NewsAPI.bind(this);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return this.NewsAPI();
  }

  getNewsDescription() {
    const items = this.state.dataSource;
    let newItems = [];

    for (let i = 0; i < items.length; i++) {
      if (items[i].uuid === this.props.navigation.state.params.uuid) {
        newItems = items[i];
        break;
      }
    }

    return (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Body>
              <Text>{newItems.thread.title}</Text>
              <Text note>{newItems.thread.site}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem >
          <Body>
            <Image
              source={{ uri: newItems.thread.main_image }}
              style={{ height: 200, width: win.width - 40, flex: 1 }}
            />
            <Text>{newItems.text}</Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Text>{newItems.thread.published}</Text>
          </Left>
        </CardItem>
      </Card>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("HomePage")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
        </Header>
        <Content>{this.getNewsDescription()}</Content>
      </Container>
    );
  }
}
