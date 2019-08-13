import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { map } from "lodash";
import PupilsList from "./UI/PupilsList";

export default class PupilsLayout extends Component {
  render() {
    const { pupilData } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ paddingLeft: 16, paddingRight: 16 }}>
            {map(pupilData, (pupil, key) => {
              return (
                <PupilsList
                  key={key}
                  title={pupil.title}
                  subTitle={pupil.subTitle}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
