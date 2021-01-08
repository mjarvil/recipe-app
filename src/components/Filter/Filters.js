import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { DEFAULT_MAX_FILTER } from '../../contants/contants';
import { assignFilter } from '../../actions/index';
import './Filters.css';

const Filters = () => {
  const [maxFilter, setMaxFilter] = useState(DEFAULT_MAX_FILTER);
  const dispatch = useDispatch();

  const handleMaxFilter = (e) => {
    setMaxFilter(parseInt(e.target.value));
    // console.log(maxFilter, typeof maxFilter);
    dispatch(assignFilter(maxFilter));
  };

  useEffect(() => {
    dispatch(assignFilter(maxFilter));
  }, [dispatch, maxFilter]);

  return (
    <div>
      <h5>Max number of recipes</h5>
      <input
        type="radio"
        id="1rp"
        name="filter"
        value={1}
        defaultChecked
        onClick={handleMaxFilter}
      />
      <label htmlFor="1rp">1 Recipes</label>

      <input
        type="radio"
        id="5rp"
        name="filter"
        value={5}
        onClick={handleMaxFilter}
      />
      <label htmlFor="5rp">5 Recipes</label>

      <input
        type="radio"
        id="15rp"
        name="filter"
        value={15}
        onClick={handleMaxFilter}
      />
      <label htmlFor="15rp">15 Recipes</label>
    </div>
  );
};

export default Filters;
