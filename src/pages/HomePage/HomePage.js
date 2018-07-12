import React, { Component } from "react";
import Header from "../../components/Header";
import { Container, Content, List, ListItem, Text } from "native-base";
import NewsPreview from "../../components/NewsPreview";
import { ActivityIndicator, View } from "react-native";

export default class HomePage extends Component {
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

  getTheme() {
       if (this.props.navigation.state.params === undefined) {
           return null;
       }else {
           console.log(this.props.navigation.state.params);
           return this.props.navigation.state.params.theme;
       }
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
      <Container>
        <Header navigation={this.props.navigation} />
        <Content>
            {/*<Text>
                {this.props.navigation.state.params.theme}
            </Text>*/}
          <List
            dataArray={items}
            renderRow={item => (item.source.name === this.getTheme() ) ?   (

                <ListItem>

                <NewsPreview
                title={item.title}
                image={item.urlToImage}
                text={item.description}
                theme={item.source.name}
                />
                </ListItem>

            ):null }
          />

        </Content>
      </Container>
      /*{/!*<View style={{ padding: 50 }}>
          <Text>fdsfdsfsd</Text>
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
      </View>*!/}*/
    );
  }
}
