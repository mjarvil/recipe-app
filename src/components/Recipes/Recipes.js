import React from 'react';
import './Recipes.css';
import Recipe from './Recipe/Recipe';
import { useSelector } from 'react-redux';

import { Space } from 'antd';

// displayResult is a function that will open the drawer component
const Recipes = ({ displayResult }) => {
  const recipes = useSelector((state) => {
    return state.recipes;
  });

  return (
    <Space direction="vertical">
      {recipes.map(({ recipe }, index) => {
        return (
          <Recipe
            key={index}
            id={index}
            image={recipe.image}
            name={recipe.label}
            displayResultHandler={displayResult}
          />
        );
      })}
    </Space>
  );
};

export default Recipes;
