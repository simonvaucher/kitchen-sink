import React from "react";
import { Text, View } from "react-native";
import * as R from "ramda";

const _styles = {
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "visible",
    backgroundColor: "rgba(222,222,222,1.0)",
    margin: 20,
    padding: 8
  },
  text: {
    color: "rgba(0,0,0,1.0)"
  }
};

export function KitchenSink({ component, styles, cellStyles }) {
  const { configuration } = cellStyles[component.cell_plugin_configuration_id];

  const textStyle = {
    fontFamily: R.path(["styles", "android_style", "my_font"], configuration),
    color: R.path(["styles", "android_style", "my_color"], configuration),
    fontSize: parseInt(
      R.path(["styles", "android_style", "my_font_size"], configuration),
      10
    ),
    padding: 18
  };

  return function DrawCell({ item: { title }, state }) {
    return (
      <View style={_styles.container}>
        <Text style={textStyle}>{title}</Text>
      </View>
    );
  };
}
