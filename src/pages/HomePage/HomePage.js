import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Content, ListItem } from "native-base";
import NewsPreview from "../../components/NewsPreview";
import { ActivityIndicator, FlatList, View } from "react-native";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
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
  getNewsList() {
    let items = this.state.dataSource;
    let newItems = [];

    for (let i = 0; i < items.length; i++) {
      if (
        this.props.navigation.state.params === undefined ||
        this.props.navigation.state.params.theme === "Home"
      ) {
        newItems = items;
        break;
      }
      if (items[i].source.name === this.props.navigation.state.params.theme) {
        newItems.push(items[i]);
      }
    }
    return (
      <FlatList
        data={newItems}
        renderItem={({ item }) => this.getTheme(item)}
        keyExtractor={(item, index) => index}
      />
    );
  }

  getTheme(item) {
    return (
      <ListItem
        onPress={() =>
          this.props.navigation.navigate("NewsPage", {
            url: item.url
          })
        }
      >
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
    return (
      <Container>
        <Header navigation={this.props.navigation} />
        <Content>{this.getNewsList()}</Content>
      </Container>
    );
  }
}
