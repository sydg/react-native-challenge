import * as types from "../constants/actionTypes";

const getBlocksStart = (nodeId) => {
  return {
    type: types.GET_BLOCKS_STATUS_START,
    nodeId,
  };
};

const getBlocksStatusSuccess = (nodeId, res) => {
  return {
    type: types.GET_BLOCKS_STATUS_SUCCESS,
    nodeId,
    res
  };
};

const getBlocksStatusFailure = (nodeId, error) => {
  return {
    type: types.GET_BLOCKS_STATUS_FAILURE,
    nodeId,
    error
  };
};

export function getBlocks(node) {
  return async dispatch => {
    try {
      dispatch(getBlocksStart(node.url));
      const res = await fetch(`${node.url}/api/v1/blocks`);

      if (res.status >= 400) {
        dispatch(getBlocksStatusFailure(node.url, 'Cannot get the blocks'));
      }

      const json = await res.json();
      dispatch(getBlocksStatusSuccess(node.url, json.data));
    } catch (err) {
      dispatch(getBlocksStatusFailure(node.url,'Cannot get the blocks' ));
    }
  };
}
