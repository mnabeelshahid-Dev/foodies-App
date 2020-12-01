import {
  CREATE_USER,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from '../types';

const iState = {
  register: {},
};

const AuthReducer = (state = iState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        error: null,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    }
    case REGISTRATION_FAILURE: {
      return {
        ...state,
        error: 'some thing went wrong',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default AuthReducer;
