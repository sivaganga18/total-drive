import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";
import CustomStatusBar from "../Common/CustomStatusBar";
import LoginLayout from "../ScenesComponents/Login/LoginLayout";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.drakBlue }}>
        <CustomStatusBar />
        <LoginLayout
          callback={() => {
            Actions.instructor();
          }}
        />
      </View>
    );
  }
}
