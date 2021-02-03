import {
  GET_BLOCKS_STATUS_START,
  GET_BLOCKS_STATUS_SUCCESS,
  GET_BLOCKS_STATUS_FAILURE,
} from '../../constants/actionTypes';
import initialState from './initialState';

export default function nodesReducer(state = initialState(), action) {
  switch (action.type) {
    case GET_BLOCKS_STATUS_START:
      return {
        ...state,
        [action.nodeId]: {
          loading: true
        }
      };
    case GET_BLOCKS_STATUS_SUCCESS:
      return {
        ...state,
        [action.nodeId]: {
          loading: false,
          error: null,
          data: action.res
        }
      };
    case GET_BLOCKS_STATUS_FAILURE:
      return {
        ...state,
        [action.nodeId]: {
          loading: false,
          error: action.error,
        }
      };
    default:
      return state;
  }
}
