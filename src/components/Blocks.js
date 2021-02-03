import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import Block from "./Block";
import { ProgressCircle } from "material-bread";

const Blocks = ({ blocks }) => {

  if(blocks.loading){
    return (
      <View style={styles.container}>
        <ProgressCircle  />
      </View>
    );
  }
  if(blocks.error){
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{blocks.error}</Text>
      </View>
    );
  }
  if(blocks.data.length === 0){
    return (
      <View style={styles.container}>
        <Text>No blocks</Text>
      </View>
    );
  }

  return (
    <View>
      {blocks.data.map(block => (
        <Block
          key={`${block.id}`}
          id={block.id}
          description={block.attributes.data}
        />
      ))}
    </View>
  );
};

Blocks.propTypes = {
  blocks: PropTypes.any
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center'
  },
  errorText:{
    color: colors.danger
  }
});
export default Blocks;
