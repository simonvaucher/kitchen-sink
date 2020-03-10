// @flow
import React from "react";
import { ActivityIndicator, Image, Platform, Text, View } from "react-native";
import * as R from "ramda";

type textEntity = {
  fontFamily: string,
  fontSize: number,
  color: string,
  lineHeight: number,
  fontWeight: string,
  padding: number
};

function parseTextStyle(raw): textEntity {
  const rawObj = raw[`${Platform.OS}_style`];

  return {
    fontFamily: rawObj.font_family,
    fontSize: parseInt(rawObj.font_size, 10),
    color: rawObj.font_color,
    lineHeight: parseInt(rawObj.line_height, 10),
    fontWeight: rawObj.font_weight,
    padding: 8
  };

  // return {
  //   fontFamily: "Roboto",
  //   fontSize: 19,
  //   color: "rgba(0,0,244,1.0)",
  //   lineHeight: 20,
  //   fontWeight: "600",
  //   padding: 8
  // };
}

const _styles = {
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "visible",
    backgroundColor: "rgba(222,222,222,1.0)",
    marginHorizontal: 3,
    marginBottom: 17,
    padding: 3
  }
};

export function KitchenSink({ component, cellStyles }) {
  const {
    configuration: { styles }
  } = cellStyles[component.styles.cell_plugin_configuration_id];

  const titleStyle = parseTextStyle(styles.title_text_style);
  const subtitleStyle = parseTextStyle(styles.subtitle_text_style);

  return function DrawCell({ item, state }) {
    const { title, summary } = item;
    console.log(item);

    return (
      <View style={_styles.container}>
        <Image
          style={{ width: "100%", aspectRatio: 16 / 9 }}
          source={{
            uri:
              item.media_group[2].media_item[0].src ||
              "https://via.placeholder.com/300/00AA00/000000?text=There%20is%20some%20image%20here%0A"
          }}
        />
        <Text style={titleStyle}>{title}</Text>
        <Text numberOfLines={1} style={subtitleStyle}>
          {summary || "no summary"}
        </Text>
      </View>
    );
  };
}
