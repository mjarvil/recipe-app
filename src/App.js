import React from 'react';
import './App.css';
import SearchBar from './components/Search/SearchBar';
import Filters from './components/Filter/Filters';
import Recipes from './components/Recipes/Recipes';
import RecipeInformation from './components/Recipes/Recipe/Information/Information';

function App() {
  return (
    <div className="app">
      <section className="recipe-result">
        <div className="search-filter">
          <SearchBar />
          <Filters />
          <Recipes />
        </div>
      </section>
      <section className="recipe-info">
        <RecipeInformation />
      </section>
    </div>
  );
}

export default App;
