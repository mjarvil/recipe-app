import React from 'react';
import { useDispatch } from 'react-redux';
import { assignSelectedRecipe } from '../../../actions';
// import './Recipe.css';

import { Card, Image } from 'antd';

const Recipe = ({ image, name, id, displayResultHandler }) => {
  const dispatch = useDispatch();

  const handleSelectedRecipe = (e) => {
    displayResultHandler();
    dispatch(assignSelectedRecipe(e.target.dataset.id));
  };

  return (
    <>
      <Card title={name} size="small" style={{ width: '250px' }}>
        <Image src={image} alt={name} />
        <button type="link" onClick={handleSelectedRecipe} data-id={id}>
          View recipe
        </button>
      </Card>
    </>
  );
};

export default Recipe;
