import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import HealthLabels from '../../../../components/HealthLabels/HealthLabels';
import Ingredients from '../../../Ingredients/Ingredients';
import NutritionFact from '../../../NutritionFacts/NutritionFact';
import './Information.css';

const RecipeInformation = () => {
  const [rcp, setRcp] = useState(null);
  const recipes = useSelector((state) => state.recipes);
  const selectedRecipe = useSelector((state) => state.selectedRecipe);

  useEffect(() => {
    if (!selectedRecipe) return;
    setRcp(recipes[selectedRecipe]);
  }, [rcp, recipes, selectedRecipe]);

  return (
    <div>
      {rcp === null ? (
        'no recipe'
      ) : (
        <>
          <div className="hero-recipe">
            <img src={rcp.recipe.image} alt={rcp.recipe.label} />
          </div>
          <div className="recipe-information">
            <div className="recipe-main-info">
              <h3>{rcp.recipe.label}</h3>
              <div className="hr"></div>
              {rcp.recipe.healthLabels.map((healthLabel, index) => {
                return <HealthLabels key={index} label={healthLabel} />;
              })}

              <p>Total Time: {rcp.recipe.totalTime}</p>
              <p>Servings: {rcp.recipe.yield}</p>
              <div className="hr"></div>
              <h3>Ingredients</h3>
              <Ingredients ingredientsList={rcp.recipe.ingredients} />
            </div>
            <div className="recipe-aside">
              <h3>{`Calories ${Math.round(rcp.recipe.calories)}`}</h3>
              {/*  */}
              {Object.keys(rcp.recipe.totalNutrients).map((key) => {
                // console.log(rcp.recipe.totalNutrients[key]);
                return (
                  <NutritionFact
                    key={key}
                    nutrient={rcp.recipe.totalNutrients[key]}
                  />
                );
              })}
              <a
                href={rcp.recipe.url}
                target="_blank"
                nofollow="true"
                rel="noreferrer"
              >
                View On Site
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeInformation;
