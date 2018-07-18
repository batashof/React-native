import PropTypes from "prop-types";
import React, { Component } from "react";
import { DrawerActions } from "react-navigation";

import { Content, List, ListItem, Text } from "native-base";
import { ActivityIndicator, FlatList, View } from "react-native";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    const items = this.state.dataSource;
    return (
      <Content>
        <List>
          <ListItem
            onPress={() => {
              this.props.navigation.dispatch(DrawerActions.closeDrawer());
              this.props.navigation.navigate("HomePage", {
                theme: "Home"
              });
            }}
          >
            <Text>Home</Text>
          </ListItem>
        </List>
        <List
          dataArray={items}
          renderRow={item => (
            <ListItem
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.closeDrawer());
                this.props.navigation.navigate("HomePage", {
                  theme: item.source.name
                });
              }}
            >
              <Text>{item.source.name}</Text>
            </ListItem>
          )}
        />
      </Content>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};
