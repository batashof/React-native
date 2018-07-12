import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./SideMenu.style";
import { NavigationActions } from "react-navigation";
//import { ScrollView, Text, View } from "react-native";
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

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    const items = this.state.dataSource;
      console.log(this.props.navigation.state);
    return (
      <Content>
        <List>
          <ListItem onPress={this.navigateToScreen("HomePage")}>
            <Text>Home</Text>
          </ListItem>
        </List>
        <List
          dataArray={items}
          renderRow={item => (
            <ListItem onPress={() => this.props.navigation.navigate('HomePage', {theme: item.source.name }) } >
              <Text>{item.source.name}</Text>
            </ListItem>
          )}
        />
      </Content>
      /*   {/!*<View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>Section 1</Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("HomePage")}
              >
                Home
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Page2")}
              >
                Page2
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen("Page3")}
              >
                Page3
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>*!/}*/
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};
