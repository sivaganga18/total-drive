import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { colors } from "../../styles/StyleSheet";

export default class CustomTextField extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <View style={{ paddingBottom: 26 }}>
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            height: 50,
            backgroundColor: colors.textFieldBackground,
            borderRadius: 4
          }}
        >
          <TextInput style={{ height: 50 }} placeholder={placeholder} />
        </View>
      </View>
    );
  }
}
