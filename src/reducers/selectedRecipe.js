import { ASSIGN_RECIPE } from '../contants/contants';

const selectedRecipeReducer = (state = null, action) => {
  switch (action.type) {
    case ASSIGN_RECIPE:
      return action.payload;
    default:
      return state;
  }
};

export default selectedRecipeReducer;
