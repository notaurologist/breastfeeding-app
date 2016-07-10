import { ADD_FEEDING, DELETE_FEEDING, EDIT_FEEDING } from '../constants/ActionTypes';
import {v4} from 'node-uuid';

let initialById = {};
let initialListedIds = [];

function feeding(state, action) {
  switch (action.type) {
    case ADD_FEEDING:
      return {
        id: v4(),
				start: action.start,
      };
    case EDIT_FEEDING:
      return Object.assign({}, state, {
        start: action.start,
				duration: action.duration,
				side: action.side,
      });
		default:
			return state;
  }
}

function byId(state = initialById, action) {
  switch (action.type) {
    case ADD_FEEDING:
    case EDIT_FEEDING:
      return Object.assign({}, state, {
        [action.id]: feeding(state[action.id], action),
      });
    default:
      return state;
  }
}

function listedIds(state = initialListedIds, action) {
  switch (action.type) {
    case ADD_FEEDING:
      return [action.id, ...state];
    case DELETE_FEEDING:
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
}

export default function feedings(state = {}, action) {
  return {
    byId: byId(state.byId, action, state),
    listedIds: listedIds(state.listedIds, action, state),
  }
}
