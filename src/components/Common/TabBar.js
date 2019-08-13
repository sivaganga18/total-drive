import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions, Image } from "react-native";
import { map } from "lodash";
import { colors, typography } from "../../styles/StyleSheet";

const width = Dimensions.get("window").width;

export default class TabBar extends Component {
  render() {
    const { tabs, activeTab, callback } = this.props;
    return (
      <View
        style={[{ backgroundColor: colors.lightGreen, flexDirection: "row" }]}
      >
        {map(tabs, (tab, key) => {
          return (
            <TouchableOpacity
              key={key + 1}
              onPress={() => {
                callback(key + 1);
              }}
              style={{ padding: 16, width: "25%", alignItems: "center" }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 20, height: 20 }}
                source={tab.image}
              />
              <Text style={[typography.medium.regular, { paddingTop: 4 }]}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
