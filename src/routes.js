import HomePage from "./pages/HomePage/HomePage";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import SideMenu from "./components/SideMenu/SideMenu";
import { DrawerNavigator } from "react-navigation";
import React from "react";

export default DrawerNavigator(
  {
    HomePage: {
      screen: HomePage
    },
    Page2: {
      screen: Page2
    },
    Page3: {
      screen: Page3
    }
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    drawerWidth: 300
  }
);
