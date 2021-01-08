import React from 'react';

const Ingredients = ({ ingredientsList }) => {
  return (
    <div>
      {ingredientsList.map((ingredient, index) => {
        return (
          <div key={Math.random()}>
            <input
              key={Math.random()}
              type="checkbox"
              id={index}
              name="ingredientList"
              value={ingredient.text}
            />{' '}
            &nbsp;
            <label key={Math.random()} htmlFor={index}>
              {ingredient.text}
            </label>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Ingredients;
