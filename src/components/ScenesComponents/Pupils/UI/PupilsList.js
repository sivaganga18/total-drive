import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { typography, colors } from "../../../../styles/StyleSheet";

export default class PupilsList extends Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <TouchableOpacity
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 0.5,
          borderColor: "#e1e1e1e1"
        }}
      >
        <View>
          <Text
            style={[
              typography.regular.regular,
              { color: colors.textPrimaryDrak1 }
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              typography.light.small,
              { color: colors.textPrimarySecondary, paddingTop: 4 }
            ]}
          >
            {subTitle}
          </Text>
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={{ width: 12, height: 12 }}
            source={require("../../../../assets/images/right_icon.png")}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
