import PropTypes from "prop-types";
import React, { Component } from "react";
import { DrawerActions } from "react-navigation";

import { Content, List, ListItem, Text } from "native-base";
import { ActivityIndicator, FlatList, View } from "react-native";
import NewsAPI from "../../components/NewsAPI";

export default class SideMenu extends Component {
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
                theme: "Main"
              });
            }}
          >
            <Text>Main</Text>
          </ListItem>
        </List>
        <List
          dataArray={items}
          renderRow={item => (
            <ListItem
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.closeDrawer());
                this.props.navigation.navigate("HomePage", {
                  theme: item.thread.site
                });
              }}
            >
              <Text>{item.thread.site}</Text>
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
