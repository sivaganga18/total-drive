import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../Common/AppHeader";
import { colors, typography } from "../../styles/StyleSheet";
import CustomTextField from "../Common/CustomTextField";
import Button from "../Common/Button";
import { Actions } from "react-native-router-flux";

export default class Instructor extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <AppHeader
          title={"Instructor"}
          subTitle={"Total Drive"}
          leftIconCallback={() => {
            Actions.pop();
          }}
        />
        <View style={{ paddingTop: 150, alignItems: "center" }}>
          <Text style={[typography.light.medium, { color: colors.lightGreen }]}>
            Account Login
          </Text>
        </View>
        <View style={{ padding: 26 }}>
          <CustomTextField placeholder={"Username"} />
          <CustomTextField placeholder={"Password"} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Button buttonTitle="Login" />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 36,
            alignItems: "center",
            left: 0,
            right: 0
          }}
        >
          <Text
            style={[
              typography.regular.small,
              {
                alignItems: "center",
                textAlign: "center",
                color: colors.textPrimarySecondary
              }
            ]}
          >
            Forgot your password? Click here to reset it
          </Text>
        </View>
      </View>
    );
  }
}
