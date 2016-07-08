import * as types from '../constants/ActionTypes';

export function addFeeding() {
  return { type: types.ADD_FEEDING };
}

export function deleteFeeding(id) {
  return { type: types.DELETE_FEEDING, id };
}

export function editFeeding(id, ) {
  return { type: types.EDIT_FEEDING, id };
}
