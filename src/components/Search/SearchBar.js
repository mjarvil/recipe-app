import React, { useState } from 'react';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions';

import { Input, Row, Col } from 'antd';

const SearchBar = ({ displayResult }) => {
  // state for holding text entered in the searchbox
  const [queryString, setQueryString] = useState('');
  const dispatch = useDispatch();

  // get the max number of result from redux
  const filter = useSelector((state) => state.filter);

  const { Search } = Input;

  const handleQuery = (e) => {
    setQueryString(e.target.value || '');
  };

  return (
    <Row>
      <Col span={16} offset={4}>
        <Search
          className="search"
          placeholder="What Are you Craving?"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={() => {
            if (queryString !== '') {
              displayResult(); // open the drawer

              // call the getRecipes function from the actions folder
              dispatch(getRecipes(queryString, filter));
            }
          }}
          onChange={handleQuery}
        />
      </Col>
    </Row>
  );
};

export default SearchBar;
