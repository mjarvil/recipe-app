import React, { useState } from 'react';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions';

const SearchBar = () => {
  const [queryString, setQueryString] = useState('');
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleQuery = (e) => {
    setQueryString(e.target.value || '');
  };

  return (
    <div className="search">
      <h5>What are you craving?</h5>
      <input type="text" onChange={handleQuery} />
      <button
        onClick={() => {
          if (queryString !== '') {
            dispatch(getRecipes(queryString, filter));
          }
        }}
      >
        search
      </button>
    </div>
  );
};

export default SearchBar;
