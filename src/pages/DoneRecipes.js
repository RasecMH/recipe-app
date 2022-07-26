import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../components/Header';
import DoneRecipesCard from '../components/DoneRecipesCard';
import DoneRecipesFilter from '../components/DoneRecipesFilter';

const DoneRecipes = ({ history }) => (
  <div className='h-full pt-24'>
    <Header title="Done Recipes" history={ history } />
    <div className='flex items-center justify-center mt-3'>
      <DoneRecipesFilter />
    </div>
    <DoneRecipesCard />
  </div>
);

DoneRecipes.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired;

export default DoneRecipes;
