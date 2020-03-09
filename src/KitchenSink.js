import React from "react";
import { Text, View } from "react-native";

const _styles = {
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "visible",
    backgroundColor: "rgba(255,255,255,1.0)"
  },
  text: {
    color: "rgba(0,0,0,1.0)"
  }
};

export function KitchenSink({ component, styles, cellStyles }) {
  return function DrawCell({ item: { title }, state }) {
    return (
      <View styles={_styles.container}>
        <Text styles={_styles.text}>hello there</Text>
      </View>
    );
  };
}
