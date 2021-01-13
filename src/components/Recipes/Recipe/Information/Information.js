import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Ingredients from '../../../Ingredients/Ingredients';
import NutritionFact from '../../../NutritionFacts/NutritionFact';

import './Information.css';

import { Image, Row, Col, Typography, Button, Divider, Badge } from 'antd';

const RecipeInformation = () => {
  const [rcp, setRcp] = useState(null);
  const recipes = useSelector((state) => state.recipes);
  const selectedRecipe = useSelector((state) => state.selectedRecipe);

  useEffect(() => {
    if (!selectedRecipe) return;
    setRcp(recipes[selectedRecipe]);
  }, [rcp, recipes, selectedRecipe]);

  const { Text, Title } = Typography;

  return (
    <>
      {rcp === null ? (
        'No recipe information to display. Kindly search on top'
      ) : (
        <Row gutter={[16, 16]}>
          <Col
            lg={{ span: 24 }}
            xl={{ span: 10, offset: 2 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Row>
              <Col span={24}>
                <Image
                  src={rcp.recipe.image}
                  alt={rcp.recipe.label}
                  height="600"
                />
              </Col>
            </Row>

            <Divider />
            <Row>
              <Col span={24}>
                <Title level={2}>{rcp.recipe.label}</Title>
                <Row>
                  <Col>
                    {rcp.recipe.healthLabels.map((healthLabel, index) => {
                      return (
                        <Badge
                          style={{ margin: '0 2px' }}
                          count={healthLabel}
                          key={index}
                        />
                      );
                    })}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col span={24}>
                <Text style={{ marginRight: '20px' }}>Calories</Text>
                <Badge
                  status="success"
                  text={Math.round(rcp.recipe.calories)}
                />
              </Col>
            </Row>
            <Row style={{ marginTop: '20px' }}>
              <Col span={24}>
                <Text style={{ marginRight: '20px' }}>Servings</Text>
                <Badge status="success" text={Math.round(rcp.recipe.yield)} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Divider orientation="left">Ingredients</Divider>
                <Ingredients ingredientsList={rcp.recipe.ingredients} />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button
                  type="primary"
                  href={rcp.recipe.url}
                  target="_blank"
                  style={{ margin: '10px 0 0 0 ' }}
                  nofollow="true"
                >
                  View on Site
                </Button>
              </Col>
            </Row>
          </Col>
          <Col
            lg={{ span: 24 }}
            xl={{ span: 12 }}
            md={{ span: 24 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Row>
              <Col span={24}>
                <NutritionFact nutrients={rcp.recipe.totalNutrients} />
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default RecipeInformation;
