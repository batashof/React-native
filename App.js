import React, { Component } from "react";
import Router from "./src/routes";
import { AppRegistry } from "react-native";

export default class CustomDrawer extends Component {
  render() {
    return <Router />;
  }
}

AppRegistry.registerComponent("CustomDrawer", () => CustomDrawer);

/*
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ScrollView
} from "react-native";
import SideMenu from "react-native-side-menu";
import Menu from "./Menu";
import SideBar from './Menu';
import { Drawer } from 'native-base';
import NewsPreview from "./NewsPreview";
import { Header, Icon } from "react-native-elements";
import HomeScreen from "./src/HomeScreen/index.js";

/!*
const image = require("./assets/menu.png");

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 10,
    padding: 10
  },
  caption: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center"
  },
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
*!/

export default class App extends Component {
 /!* constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: "About",
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

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item
    });
*!/
  render() {
  /!*  const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
      closeDrawer = () => {
          this.drawer._root.close()
      };
      openDrawer = () => {
          this.drawer._root.open()
      };*!/
    return (
        <Drawer
            type="overlay"
            content={<Menu />}
            tapToClose={true}
            openDrawerOffset={0.2} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            //styles={drawerStyles}
            tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
            })}
        >
            <NewsPreview />
        </Drawer>
    /!* {/!* <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <Header
            centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          />
          <TouchableOpacity onPress={this.toggle} style={styles.button}>
            <Image source={image} style={{ width: 32, height: 32 }} />
          </TouchableOpacity>
            <Text>{JSON.stringify(this.state.dataSource)}</Text>
          <ScrollView>
            <NewsPreview />
            <NewsPreview />
            <NewsPreview />
          </ScrollView>
        </View>
      </SideMenu>*!/}*!/
    );
  }
}
*/
