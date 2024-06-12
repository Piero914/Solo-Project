import * as types from '../constants/actionTypes';

export const changeHair = (newHair) => ({
  type: types.CHANGE_HAIR,
  payload: newHair,
});

export const changeEyebrows = (newEyebrows) => ({
  type: types.CHANGE_EYEBROWS,
  payload: newEyebrows,
});
export const changeEyes = (newEyes) => ({
  type: types.CHANGE_EYES,
  payload: newEyes,
});
export const changeNose = (newNose) => ({
  type: types.CHANGE_NOSE,
  payload: newNose,
});
export const changeMouth = (newMouth) => ({
  type: types.CHANGE_MOUTH,
  payload: newMouth,
});
