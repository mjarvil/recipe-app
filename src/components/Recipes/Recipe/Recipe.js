import React from 'react';
import { useDispatch } from 'react-redux';
import { assignSelectedRecipe } from '../../../actions';
import './Recipe.css';

const Recipe = ({ image, name, id }) => {
  const dispatch = useDispatch();

  const handleSelectedRecipe = (e) => {
    const selectedDataID = e.target.dataset.id;
    dispatch(assignSelectedRecipe(selectedDataID));
  };

  return (
    <div className="recipe">
      <img
        data-id={id}
        src={image}
        alt={name}
        className="recipe-image"
        onClick={handleSelectedRecipe}
      />
      <div className="recipe-name">{name}</div>
    </div>
  );
};

export default Recipe;
