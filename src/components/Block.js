import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

const Block = ({ id, description }) => (
  <View style={styles.container}>
    <Text style={styles.textId}>{id.padStart(3,"0")}</Text>
    <Text style={styles.textDescription}>{description}</Text>
  </View>
);

Block.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.blockBg
  },
  textId: {
    fontSize: 10,
    color: colors.textPrimary
  },
  textDescription: {
    color: colors.text
  }
});

export default Block;
