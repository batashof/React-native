import React, { Component } from "react";
import { ActivityIndicator } from "react-native";

export default function NewsAPI() {
  fetch(
    "http://webhose.io/filterWebContent?token=af0677b3-a6af-4874-8cc2-94daf120d63a&format=json&ts=1532005749814&sort=crawled&q=language%3Afrench%20site_type%3A%20news%20country%3A%20fr%20site_category%3Apolitics%20ord_in_thread%3A0"
  )
    .then(response => response.json())
    .then(responseJson => {
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson.posts
        },
        function() {}
      );
    })
    .catch(error => {
      console.error(error);
    });
}
