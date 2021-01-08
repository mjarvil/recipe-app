import { RETRIEVE_RECIPES } from '../contants/contants';

const recipeReducer = (recipe = [], action) => {
  switch (action.type) {
    case RETRIEVE_RECIPES:
      return action.payload;
    default:
      return recipe;
  }
};

export default recipeReducer;
