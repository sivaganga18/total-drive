import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../Common/AppHeader";
import { colors } from "../../styles/StyleSheet";
import CustomTextField from "../Common/CustomTextField";
import Button from "../Common/Button";
import { Actions } from "react-native-router-flux";
import InstructorLayout from "../ScenesComponents/Instructor/InstructorLayout";
import { isEmpty } from "lodash";

export default class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      userNameError: false,
      passwordError: false
    };
  }
  render() {
    const { userName, password, userNameError, passwordError } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <AppHeader
          title={"Instructor"}
          subTitle={"Total Drive"}
          leftIconCallback={() => {
            Actions.pop();
          }}
        />
        <InstructorLayout
          userNameOnChangeText={e => {
            this.setState({
              userName: e,
              userNameError: !e.length
            });
          }}
          passwordOnChangeText={e => {
            this.setState({
              password: e,
              passwordError: !e.length
            });
          }}
          userNameError={userNameError}
          passwordError={passwordError}
        />
      </View>
    );
  }
}
