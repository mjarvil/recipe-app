import React, { useState } from 'react';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions';

import { Input, Row, Col } from 'antd';

const SearchBar = () => {
  const [queryString, setQueryString] = useState('');
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const { Search } = Input;

  const handleQuery = (e) => {
    setQueryString(e.target.value || '');
  };

  return (
    // <div className="search">
    //   <h5>What are you craving?</h5>
    //   <input type="text" onChange={handleQuery} />
    //   <button
    //     onClick={() => {
    //       if (queryString !== '') {
    //         dispatch(getRecipes(queryString, filter));
    //       }
    //     }}
    //   >
    //     search
    //   </button>
    // </div>
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
