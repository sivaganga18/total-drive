import React, { Component } from "react";
import { View, Text } from "react-native";
import { typography, colors } from "../../../styles/StyleSheet";
import CustomTextField from "../../Common/CustomTextField";
import Button from "../../Common/Button";

export default class InstructorLayout extends Component {
  render() {
    const {
      userNameOnChangeText,
      passwordOnChangeText,
      userNameError,
      passwordError,
      buttonDisable
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ paddingTop: 86, alignItems: "center" }}>
          <Text style={[typography.light.medium, { color: colors.lightGreen }]}>
            Account Login
          </Text>
        </View>
        <View style={{ padding: 26 }}>
          <CustomTextField
            placeholder={"Username"}
            onChangeText={userNameOnChangeText}
            error={userNameError}
            errorMessage="Requried Field"
          />
          <CustomTextField
            placeholder={"Password"}
            onChangeText={passwordOnChangeText}
            error={passwordError}
            errorMessage="Requried Field"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Button buttonTitle="Login" disable={buttonDisable} />
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
