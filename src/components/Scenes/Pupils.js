import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppHeader from "../Common/AppHeader";
import { Actions } from "react-native-router-flux";
import { colors } from "../../styles/StyleSheet";
import PupilsLayout from "../ScenesComponents/Pupils/PupilsLayout";
import TabBar from "../Common/TabBar";

export default class Pupils extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1
    };
  }

  render() {
    const tabs = [
      { title: "Pupils", image: require("../../assets/images/user.png") },
      {
        title: "Diary",
        image: require("../../assets/images/calendar.png")
      },
      { title: "Money", image: require("../../assets/images/money.png") },
      {
        title: "Profile",
        image: require("../../assets/images/settings.png")
      }
    ];
    const data = [
      { title: "John Smith", subTitle: "Next lesson  06 Apr 2019" },
      { title: "John Smith", subTitle: "Next lesson  06 Apr 2019" },
      { title: "John Smith", subTitle: "Next lesson  06 Apr 2019" },
      { title: "John Smith", subTitle: "Next lesson  06 Apr 2019" }
    ];
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <AppHeader
          title={"Pupils"}
          subTitle={"Active learners"}
          showRightButton={true}
          leftIconCallback={() => {
            Actions.pop();
          }}
        />
        <View style={{ flex: 1 }}>
          {this.state.activeTab == 1 ? (
            <PupilsLayout pupilData={data} />
          ) : this.state.activeTab == 2 ? (
            <View
              style={{ width: "100%", height: 600, backgroundColor: "red" }}
            />
          ) : this.state.activeTab == 3 ? (
            <View
              style={{ width: "100%", height: 600, backgroundColor: "green" }}
            />
          ) : (
            <View
              style={{ width: "100%", height: 600, backgroundColor: "blue" }}
            />
          )}
        </View>
        <TabBar
          activeTab={this.state.activeTab}
          callback={key => {
            this.setState({ activeTab: key });
          }}
          tabs={tabs}
        />
      </View>
    );
  }
}
