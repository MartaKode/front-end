import { axiosWithAuth } from '../utils/axiosWithAuth';

export const fetchUser = id => async dispatch => {
  try {
   const res = await axiosWithAuth().get(`/users/${id}`);
   dispatch({ type: 'FETCH_USER', payload: { id: res.data.id, name: res.data.name }});
  } catch(error) {
    console.log(error);
  }
}

export const fetchRecipes = () => async dispatch => {
  try {
    const res = await axiosWithAuth().get(`/recipes`);
    dispatch({ type: 'FETCH_RECIPES', payload: res.data });
  } catch (error) {
    console.log(error);
  }
}

export const addRecipe = recipe => async dispatch => {
  try {
    const res = await axiosWithAuth().post(`/recipes`, recipe);
    dispatch({ type: 'ADD_RECIPES', payload: {...recipe, id: res.data[0]} });
  } catch (error) {
    console.log(error);
  }
}

export const updateRecipe = recipe => async dispatch => {
  try {
    await axiosWithAuth().put(`/recipes/${recipe.id}`, recipe);
    dispatch({ type: 'UPDATE_RECIPE', payload: recipe });
  } catch (error) {
    console.log(error);
  }
}

export const deleteRecipe = id => async dispatch => {
  try {
    await axiosWithAuth().delete(`/recipes/${id}`);
    dispatch({ type: 'DELETE_RECIPE', payload: id });
  } catch (error) {
    console.log(error);
  }
}

export const startEditing = recipe => {
  return { type: 'START_EDITING', payload: recipe }
}
