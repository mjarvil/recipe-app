import React from 'react';
import { useDispatch } from 'react-redux';
import { assignSelectedRecipe } from '../../../actions';

import { Card, Image } from 'antd';

const Recipe = ({ image, name, id, displayResultHandler }) => {
  const dispatch = useDispatch();

  const handleSelectedRecipe = (e) => {
    displayResultHandler(); // open the drawer component

    // assign the selected id on the redux state to be used later on the recipe
    // information component
    dispatch(assignSelectedRecipe(e.target.dataset.id));
  };

  return (
    <>
      <Card title={name} size="small" style={{ width: '250px' }}>
        <Image src={image} alt={name} />
        {/* id = the index of the recipe received from the api result*/}
        <button type="link" onClick={handleSelectedRecipe} data-id={id}>
          View recipe
        </button>
      </Card>
    </>
  );
};

export default Recipe;
