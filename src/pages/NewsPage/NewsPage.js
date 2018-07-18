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
const win = Dimensions.get("window");

export default class NewsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: ""
    };
  }
  getNews() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=6755260f3f1d41da8ad84091d6deca71"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.articles
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    return this.getNews();
  }

  getNewsDescription() {
    const items = this.state.dataSource;
    let newItems = [];

    for (let i = 0; i < items.length; i++) {
      console.log(items[i].url);
      if (items[i].url === this.props.navigation.state.params.url) {
        newItems = items[i];
        break;
      }
    }

    return (
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Body>
                <Text>{newItems.title}</Text>
                <Text note>{newItems.source.name}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: newItems.urlToImage }}
                style={{ height: 200, width: win.width - 40, flex: 1 }}
              />
              <Text>{newItems.description}</Text>
              <Text>{newItems.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
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
