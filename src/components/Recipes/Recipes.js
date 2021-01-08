import React from 'react';
import './Recipes.css';
import Recipe from './Recipe/Recipe';
import { useSelector } from 'react-redux';

const Recipes = () => {
  const recipes = useSelector((state) => {
    return state.recipes;
  });

  return (
    <div>
      {recipes.map(({ recipe }, index) => {
        return (
          <Recipe
            key={index}
            id={index}
            image={recipe.image}
            name={recipe.label}
          />
        );
      })}
    </div>
  );
};

export default Recipes;
