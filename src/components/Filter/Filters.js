import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DEFAULT_MAX_FILTER } from '../../contants/contants';
import { assignFilter } from '../../actions/index';
import './Filters.css';

import { Radio, Row, Col, Typography } from 'antd';

const Filters = () => {
  // state which will hold the max result to be retrieved from the api
  const [maxFilter, setMaxFilter] = useState(DEFAULT_MAX_FILTER);
  const dispatch = useDispatch();

  const { Text } = Typography;

  const handleMaxFilter = (e) => {
    setMaxFilter(parseInt(e.target.value));
    dispatch(assignFilter(maxFilter));
  };

  useEffect(() => {
    dispatch(assignFilter(maxFilter));
  }, [dispatch, maxFilter]);

  return (
    <Row gutter={[8, 8]}>
      <Col
        xs={{ span: 20, offset: 4 }}
        sm={{ span: 18, offset: 4 }}
        lg={{ span: 16, offset: 4 }}
      >
        <Row>
          <Col span={24}>
            <Text className="filter-title" type="primary">
              Max recipe to retrieve
            </Text>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 24 }}>
            <Radio.Group
              onChange={handleMaxFilter}
              value={maxFilter}
              className="filter-labels"
            >
              <Radio className="filter-label-item" value={1}>
                1 Recipe
              </Radio>
              <Radio className="filter-label-item" value={5}>
                5 Recipes
              </Radio>
              <Radio className="filter-label-item" value={15}>
                15 Recipes
              </Radio>
            </Radio.Group>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Filters;
