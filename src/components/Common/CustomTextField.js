import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";
import { colors, typography } from "../../styles/StyleSheet";

export default class CustomTextField extends Component {
  render() {
    const { placeholder, onChangeText, error, errorMessage } = this.props;
    return (
      <View style={{ paddingBottom: 20 }}>
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            height: 50,
            backgroundColor: colors.textFieldBackground,
            borderRadius: 4
          }}
        >
          <TextInput
            style={{ height: 50 }}
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
        </View>
        <View style={{ height: 20, justifyContent: "center", paddingTop: 4 }}>
          {error ? (
            <Text style={[typography.light.small, { color: "red" }]}>
              {errorMessage}
            </Text>
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}
