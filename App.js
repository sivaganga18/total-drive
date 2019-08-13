import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import Login from "./src/components/Scenes/Login";
import Instructor from "./src/components/Scenes/Instructor";
import Pupils from "./src/components/Scenes/Pupils";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            hideNavBar={true}
            component={Login}
            title="Login"
            panHandlers={null}
          />
          <Scene
            key="instructor"
            hideNavBar={true}
            component={Instructor}
            title="Instructor"
            panHandlers={null}
          />
          <Scene
            key="pupils"
            hideNavBar={true}
            component={Pupils}
            title="Pupils"
            panHandlers={null}
          />
        </Scene>
      </Router>
    );
  }
}
