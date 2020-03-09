const CELL_CONFIG_ID_PATH = ["styles", "cell_plugin_configuration_id"];

/**
 * extracts the cellStyles configuration for the current cell
 */
export function extractConfiguration({ component, cellStyles }) {
  const { component_type: componentType } = component;
  const cellConfigId = R.path(CELL_CONFIG_ID_PATH, component);

  return R.merge(cellStyles[cellConfigId], { componentType });
}
