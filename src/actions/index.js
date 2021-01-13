import * as api from '../api/recipeApi';
import {
  SET_MAX_FILTER,
  RETRIEVE_RECIPES,
  ASSIGN_RECIPE,
} from '../contants/contants';

// retrieve json result from EDAMAM API
export const getRecipes = (searchedString, filter) => async (dispatch) => {
  try {
    const { data } = await api.getRecipes(searchedString, filter);
    dispatch({ type: RETRIEVE_RECIPES, payload: data.hits });
  } catch (error) {
    console.log(error.message);
  }
};

// asign max number of result from API
export const assignFilter = (filter) => {
  return {
    type: SET_MAX_FILTER,
    payload: filter,
  };
};

// assign selected index of the recipe
export const assignSelectedRecipe = (id) => {
  return {
    type: ASSIGN_RECIPE,
    payload: id,
  };
};
