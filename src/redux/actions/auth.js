import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from './types';

export function createUser(payload) {
  console.log('create user==> ', payload);
  return {
    type: REGISTRATION_REQUEST,
    payload: user,
  };
}

export function userCreated(payload) {
  return {
    type: REGISTRATION_SUCCESS,
    payload: payload,
  };
}

export function userFailed(payload) {
  return {
    type: REGISTRATION_FAILURE,
    payload: payload,
  };
}
