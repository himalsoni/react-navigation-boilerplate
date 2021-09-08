import { ACTION_TYPES } from '../constants/actionTypes';

const initialState = {
  apiMsg: ''
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.HOME.HOME_LAUNCHED:
      return {
        ...state,
        apiMsg: 'API called succeeded!'
      };
    default:
      return state;
  }
}
