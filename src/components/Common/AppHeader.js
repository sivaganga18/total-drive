import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";
import CustomStatusBar from "./CustomStatusBar";

export default class AppHeader extends Component {
  render() {
    const { leftIconCallback, title, subTitle } = this.props;
    return (
      <View>
        <CustomStatusBar />
        <View
          style={{
            backgroundColor: colors.drakBlue,
            height: 80,
            justifyContent: "center"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[{ padding: 16, paddingTop: 10 }]}
              onPress={leftIconCallback}
            >
              <Image
                resizeMode="contain"
                style={{ width: 15, height: 15 }}
                source={require("../../assets/images/back.png")}
              />
            </TouchableOpacity>
            <View style={{ paddingTop: 6 }}>
              <Text style={[typography.medium.xlarge]}>{title}</Text>
              <View style={{ paddingTop: 2 }}>
                <Text
                  style={[
                    typography.regular.small,
                    { color: colors.lightGreen }
                  ]}
                >
                  {subTitle}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
