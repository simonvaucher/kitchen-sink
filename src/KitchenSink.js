// @flow
import { Text, View } from "react-native";
import { extractConfiguration } from "./utils";

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

/**
 *
 * Creates master from the provided configuration
 * @param {Object} props
 * @param {Object} props.component
 * @param {Object} props.styles
 * @param {Object} props.cellStyles
 * @returns {Function} Functional React Component to render the masterCell with the provided options
 */
// $FlowFixMe
export function KitchenSink({ component, styles, cellStyles }) {
  const configurationStyles = extractConfiguration({ component, cellStyles });

  return function DrawCell({ item: { title }, state }) {
    return (
      <View styles={_styles.container}>
        <Text styles={_styles.text}>{title}</Text>
        <Text styles={_styles.text}>configuration:</Text>
      </View>
    );
  };
}
