import React from 'react';

const NutritionFact = ({ nutrient }) => {
  return (
    <div>
      {nutrient.label.toUpperCase()} ({Math.round(nutrient.quantity)}{' '}
      {nutrient.unit})
    </div>
  );
};

export default NutritionFact;
