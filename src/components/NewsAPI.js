import React, { Component } from "react";

export default function NewsAPI() {
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
