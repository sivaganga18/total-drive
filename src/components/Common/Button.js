import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { colors, typography, fontSizes } from "../../styles/StyleSheet";

export default class Button extends Component {
  render() {
    const {
      smallButton,
      buttonTitle,
      smallRadius,
      storkeButton,
      rightMargin,
      callback,
      xSmallButton
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={callback}
        style={{
          width: smallButton ? 120 : xSmallButton ? 100 : 180,
          height: xSmallButton ? 30 : 50,
          marginRight: rightMargin ? 16 : 0,
          backgroundColor: storkeButton ? "transparent" : colors.lightGreen,
          borderRadius: smallRadius ? 8 : smallButton ? 120 / 2 : 180 / 2,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 2.5,
          borderColor: colors.lightGreen
        }}
      >
        <Text
          style={[
            typography.medium.medium,
            {
              color: storkeButton ? colors.lightGreen : colors.white,
              fontSize: xSmallButton ? 12 : 16
            }
          ]}
        >
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    );
  }
}
