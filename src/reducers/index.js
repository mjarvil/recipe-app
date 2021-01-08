import { combineReducers } from 'redux';
import recipeReducer from './recipes';
import filterReducer from './filters';
import selectedRecipeReducer from './selectedRecipe';

const allReducers = combineReducers({
  recipes: recipeReducer,
  filter: filterReducer,
  selectedRecipe: selectedRecipeReducer,
});

export default allReducers;
