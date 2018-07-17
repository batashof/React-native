import React, { Component } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import Header from "../components/Header";
import { Container, Content, ListItem } from "native-base";
import HomePage from "./HomePage/HomePage";
import NewsPreview from "../components/NewsPreview";

export default class Page2 extends Component {
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
    // console.log("asfdasfsdfsfasfafdsf")
    return this.getNews();
  }

  getNewsList() {
    let i = 0;
    let items = this.state.data;
    let newItems = [];
    while (i < this.state.data.length) {
      if (items[i].source.name === this.props.navigation.state.params.theme) {
        newItems.push(items[i]);
      }
      i++;
    }
    return (
      <FlatList data={newItems} renderItem={({ item }) => Page2.getTheme(item)} />
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
