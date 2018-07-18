import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage";
import SideMenu from "./components/SideMenu/SideMenu";
import { DrawerNavigator } from "react-navigation";
import React from "react";

export default DrawerNavigator(
  {
    HomePage: {
      screen: HomePage
    },
    NewsPage: {
      screen: NewsPage
    }
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    drawerWidth: 300
  }
);
