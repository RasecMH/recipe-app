import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import DoneRecipesFilter from '../components/DoneRecipesFilter';

const FavoriteRecipes = ({ history }) => (
  <div className='h-full'>
    <Header title="Favorite Recipes" history={ history } />
    <div className='flex items-center justify-center mt-3'>

    <DoneRecipesFilter />
    </div>
    <FavoriteRecipeCard />
  </div>
);

FavoriteRecipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired;

export default FavoriteRecipes;
