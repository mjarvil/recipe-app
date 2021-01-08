import { SET_MAX_FILTER } from '../contants/contants';

const filterReducer = (state = 10, action) => {
  switch (action.type) {
    case SET_MAX_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
