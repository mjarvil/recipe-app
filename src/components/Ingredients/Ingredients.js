import React from 'react';

import { Checkbox, Row, Col } from 'antd';

const Ingredients = ({ ingredientsList }) => {
  return (
    <>
      {ingredientsList.map((ingredient, index) => {
        return (
          <Row key={index}>
            <Col span={24}>
              <Checkbox>{ingredient.text}</Checkbox>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default Ingredients;
