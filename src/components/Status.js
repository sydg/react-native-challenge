import React from "react";
import PropTypes from "prop-types";
import { Chip, ProgressCircle } from "material-bread";
import colors from "../constants/colors";

function Status({ online, loading }) {
  const color = loading
    ? colors.warning
    : online
    ? colors.success
    : colors.danger;
  return (
    <Chip
      chipStyle={"outlined"}
      color={color}
      textStyles={styles.textColor(color)}
      leftIcon={loading && <ProgressCircle size={20} color={colors.warning} />}
      text={loading ? "Loading" : online ? "Online" : "Offline"}
    />
  );
}

const styles = {
  textColor: color => ({
    color
  })
};

Status.propTypes = {
  online: PropTypes.bool,
  loading: PropTypes.bool
};

export default Status;
