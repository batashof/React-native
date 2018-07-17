import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Content, List, ListItem, Text } from "native-base";
import NewsPreview from "../../components/NewsPreview";
import { ActivityIndicator, FlatList, View } from "react-native";
import { NavigationActions } from "react-navigation";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }
  // navigateToScreen = route => () => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: route
  //   });
  //   this.props.navigation.dispatch(navigateAction);
  // };
  getNews() {
    return fetch(
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

  /*  getNewsList() {
    console.log(this.props.navigation.state.params);
    if (this.props.navigation.state.params === undefined) {
      const items = this.state.dataSource;
      console.log("alooooooooo");
      return (
        <FlatList data={items} renderItem={({ item }) => this.getTheme(item)} />
      );
    } else {
      const items = this.state.dataSource;
      const newItems = items;
      for (let i = 0; i < items.length; i++) {
        if (
          newItems[i].source.name !== this.props.navigation.state.params.theme
        ) {
          newItems.splice(i, 1);
          i--;
        }
      }
      console.log(newItems);
      return (
        <FlatList
          data={newItems}
          renderItem={({ item }) => this.getTheme(item)}
        />onPress={() =>
          //this.navigateToScreen("Page3")

          this.props.navigation.navigate("Page3")
        }
      );
    }
  }*/

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
    const items = this.state.dataSource;

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
        <Content>
          <FlatList
            data={items}
            renderItem={({ item }) => (
              <ListItem onPress={() =>
                  //this.navigateToScreen("Page3")

                  this.props.navigation.navigate("Page3")
              }>
                <NewsPreview
                  title={item.title}
                  image={item.urlToImage}
                  text={item.description}
                  theme={item.source.name}
                />
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}
