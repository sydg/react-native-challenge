import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {Paper, Heading, BodyText, Caption} from 'material-bread';
import {Expander} from './Expander';

const Node = ({node, expanded, toggleNodeExpanded}) => (
  <TouchableOpacity onPress={() => toggleNodeExpanded(node)}>
    <Paper elevation={2} style={styles.container}>
      <Heading type={6} text={node.name || 'Unknown'} style={styles.spacing} />
      <Caption text={node.url} color={colors.gray} style={styles.spacing} />
      <Expander expanded={expanded} style={styles.icon} />
      {expanded && (
        <View style={styles.spacing}>
          <BodyText type={1} text={'Blocks go here'} />
        </View>
      )}
    </Paper>
  </TouchableOpacity>
);

Node.propTypes = {
  node: PropTypes.shape({
    url: PropTypes.string,
    online: PropTypes.bool,
    name: PropTypes.string,
    loading: PropTypes.bool,
  }).isRequired,
  expanded: PropTypes.bool,
  toggleNodeExpanded: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
  },
  spacing: {
    marginTop: 5,
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
});

export default Node;
