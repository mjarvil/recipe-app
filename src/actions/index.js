import * as api from '../api/recipeApi';
import {
  SET_MAX_FILTER,
  RETRIEVE_RECIPES,
  ASSIGN_RECIPE,
} from '../contants/contants';

export const getRecipes = (searchedString, filter) => async (dispatch) => {
  try {
    const { data } = await api.getRecipes(searchedString, filter);
    dispatch({ type: RETRIEVE_RECIPES, payload: data.hits });
  } catch (error) {
    console.log(error.message);
  }
};

export const assignFilter = (filter) => {
  return {
    type: SET_MAX_FILTER,
    payload: filter,
  };
};

export const assignSelectedRecipe = (id) => {
  return {
    type: ASSIGN_RECIPE,
    payload: id,
  };
};
