import React from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constants/colors";
import { Paper, Subtitle, BodyText, Caption } from "material-bread";
import { Expander } from "./Expander";
import Status from "./Status";
import Block from "./Block";
import Blocks from "./Blocks";

const Node = ({ node, expanded, toggleNodeExpanded, blocks }) => (
  <View>
    <Paper elevation={2} style={styles.container}>
      <TouchableOpacity onPress={() => toggleNodeExpanded(node)}>
        <View>
          <View style={styles.headingContainer}>
            <Subtitle
              type={6}
              text={node.name || "Unknown"}
              style={styles.heading}
            />
            <Status loading={node.loading} online={node.online} />
          </View>
          <Caption
            text={node.url}
            color={colors.gray}
            style={styles.secondaryHeading}
          />
          <Expander expanded={expanded} style={styles.icon(expanded)} />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={styles.heading}>
          <Blocks blocks={blocks} />
        </View>
      )}
    </Paper>
  </View>
);

Node.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool
  }).isRequired,
  blocks: PropTypes.any,
  expanded: PropTypes.bool,
  toggleNodeExpanded: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30
  },
  heading: {
    marginTop: 5,
    color: colors.text
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingEnd: 30,
    alignItems: "center",
    width: "100%"
  },
  secondaryHeading: {
    marginTop: 5,
    color: colors.faded
  },
  icon: expanded => ({
    position: "absolute",
    top: expanded ? 10 : 20,
    right: 10
  })
});

export default Node;
