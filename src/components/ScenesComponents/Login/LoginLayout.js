import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors, typography } from "../../../styles/StyleSheet";
import Button from "../../Common/Button";
import OTPTextView from "react-native-otp-textinput";

export default class LoginLayout extends Component {
  render() {
    const { callback } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.3,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 56
          }}
        >
          <Text
            style={[typography.medium.xxlarge, { color: colors.lightGreen }]}
          >
            Total Drive
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={[typography.regular.large]}>APP USER</Text>
          <View style={{ paddingTop: 26, flexDirection: "row" }}>
            <Button
              smallButton={true}
              storkeButton={true}
              rightMargin={true}
              smallRadius={true}
              buttonTitle="Pupil"
            />
            <Button
              smallButton={true}
              storkeButton={true}
              smallRadius={true}
              buttonTitle="Instructor"
            />
          </View>
        </View>
        <View style={[{ paddingTop: 56, alignItems: "center" }]}>
          <Text style={[typography.regular.large]}>TD CODE</Text>
        </View>
        <View style={{ padding: 16 }}>
          <OTPTextView
            containerStyle={{ margin: 20 }}
            handleTextChange={text => this.setState({ text1: text })}
            inputCount={4}
            textInputStyle={{
              borderBottomWidth: 2,
              borderBottomColor: colors.lightGreen,
              color: colors.lightGreen,
              fontFamily: "Montserrat-Regular"
            }}
            tintColor={colors.white}
            keyboardType="numeric"
          />
        </View>
        <View style={{ paddingTop: 16, alignItems: "center" }}>
          <Button callback={callback} buttonTitle={"Continue"} />
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 26,
            alignItems: "center",
            left: 0,
            right: 0
          }}
        >
          <Text
            style={[
              typography.regular.small,
              { alignItems: "center", textAlign: "center" }
            ]}
          >
            Instructors require a TD Code. Start your free trial here.
          </Text>
        </View>
      </View>
    );
  }
}
