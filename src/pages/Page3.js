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
  Text
} from "native-base";
import Page2 from "./Page2";
import { Image } from "react-native";

export default class Page3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: "",
      data: ""
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
            dataSource: responseJson.articles,
            data: responseJson.articles
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

  getNewsList() {
    let i = 0;
    let items = this.state.data;
    let newItems = [];
    while (i < this.state.data.length) {
      if (items[i].url === this.props.navigation.state.params.url) {
        newItems.push(items[i]);
        break;
      }
      i++;
    }

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
              <Text>{this.props.text}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }

  static getTheme(item) {
    //console.log(item.source.name);
    return (
      <ListItem>
        <NewsPreview
          title={item.title}
          image={item.urlToImage}
          text={item.description}
          theme={item.source.name}
        />
      </ListItem>
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
    //console.log(this.state.dataSource);
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <Content>{this.getNewsList()}</Content>
      </Container>
    );
  }
}
