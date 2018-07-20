import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Content, ListItem, View } from "native-base";
import NewsPreview from "../../components/NewsPreview";
import { ActivityIndicator, FlatList } from "react-native";
import { AdMobInterstitial } from "react-native-admob";

import NewsAPI from "../../components/NewsAPI";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/1033173712");
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
    this.props.navigation.setParams({ theme: "Main" });
    this.NewsAPI = NewsAPI.bind(this);
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    return this.NewsAPI();
  }

  getNewsList() {
    let items = this.state.dataSource;
    let newItems = [];

    for (let i = 0; i < items.length; i++) {
      if (
        this.props.navigation.state.params === undefined ||
        this.props.navigation.state.params.theme === "Main"
      ) {
        newItems = items;
        break;
      }
      if (items[i].thread.site === this.props.navigation.state.params.theme) {
        newItems.push(items[i]);
      }
    }
    return (
      <FlatList
        data={newItems}
        renderItem={({ item }) => this.getTheme(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
  getTextPreview(text) {
    return text.substr(0, 300) + "...";
  }

  getTheme(item) {
    return (
      <ListItem
        onPress={() =>
          this.props.navigation.navigate("NewsPage", {
            uuid: item.uuid
          })
        }
      >
        <NewsPreview
          title={item.thread.title}
          image={item.thread.main_image}
          text={this.getTextPreview(item.text)}
          theme={item.thread.site}
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
