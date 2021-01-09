import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DEFAULT_MAX_FILTER } from '../../contants/contants';
import { assignFilter } from '../../actions/index';
import './Filters.css';

import { Radio, Row, Col } from 'antd';

const Filters = () => {
  const [maxFilter, setMaxFilter] = useState(DEFAULT_MAX_FILTER);
  const dispatch = useDispatch();

  const handleMaxFilter = (e) => {
    setMaxFilter(parseInt(e.target.value));
    dispatch(assignFilter(maxFilter));
  };

  useEffect(() => {
    dispatch(assignFilter(maxFilter));
  }, [dispatch, maxFilter]);

  return (
    // <div>
    //   <h5>Max number of recipes</h5>
    //   <input
    //     type="radio"
    //     id="1rp"
    //     name="filter"
    //     value={1}
    //     defaultChecked
    //     onClick={handleMaxFilter}
    //   />
    //   <label htmlFor="1rp">1 Recipes</label>

    //   <input
    //     type="radio"
    //     id="5rp"
    //     name="filter"
    //     value={5}
    //     onClick={handleMaxFilter}
    //   />
    //   <label htmlFor="5rp">5 Recipes</label>

    //   <input
    //     type="radio"
    //     id="15rp"
    //     name="filter"
    //     value={15}
    //     onClick={handleMaxFilter}
    //   />
    //   <label htmlFor="15rp">15 Recipes</label>
    // </div>

    <Row>
      <Col span={12} offset={8}>
        <Radio.Group
          onChange={handleMaxFilter}
          value={maxFilter}
          className="filter-labels"
        >
          <Radio className="filter-label-item" value={1}>
            1 Recipe
          </Radio>
          <Radio className="filter-label-item" value={5}>
            5 recipe
          </Radio>
          <Radio className="filter-label-item" value={15}>
            15 recipes
          </Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default Filters;
