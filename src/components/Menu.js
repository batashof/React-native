import React, { Component } from "react";
import PropTypes from "prop-types";
import { List, ListItem } from "react-native-elements";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  ListView
} from "react-native";

const window = Dimensions.get("window");
const uri = "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png";

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: "white",
    padding: 20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  },
  name: {
    position: "absolute",
    left: 70,
    top: 20
  },
  item: {
    fontSize: 14,
    fontWeight: "300",
    paddingTop: 5
  },
  theme: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "black"
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: "" };
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
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Text style={styles.name}>Themes</Text>
        </View>

       {/* <List>
          {this.state.dataSource.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.source.name }}
            />
          ))}
        </List>*/}
        <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text style={styles.theme}>{item.source.name}</Text>}
                keyExtractor={(item, index) => index.toString()}
                />
      </ScrollView>
    );
  }
}

// Menu.propTypes = {
//     onItemSelected: PropTypes.func.isRequired,
// };
