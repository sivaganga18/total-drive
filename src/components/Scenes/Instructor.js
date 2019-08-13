import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../Common/AppHeader";
import { colors, typography } from "../../styles/StyleSheet";
import CustomTextField from "../Common/CustomTextField";
import Button from "../Common/Button";
import { Actions } from "react-native-router-flux";
import InstructorLayout from "../ScenesComponents/Instructor/InstructorLayout";

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
        <InstructorLayout />
      </View>
    );
  }
}
