import React, { Component } from "react";


export default function NewsAPI() {
  let data = [];
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=6755260f3f1d41da8ad84091d6deca71"
  )
    .then(response => response.json())
    .then(responseJson => {
      data = responseJson.articles;
    })
    .catch(error => {
      console.error(error);
    });
  return data;
}
