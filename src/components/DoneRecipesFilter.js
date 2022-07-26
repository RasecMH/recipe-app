import React from 'react';
import { useDispatch } from 'react-redux';
import { sendFilterType } from '../redux/actions';

const DoneRecipesFilter = () => {
  const dispatch = useDispatch();
  const handleClick = ({ target: { value } }) => {
    dispatch(sendFilterType(value));
  };
  return (
    <div className='btn-group flex justify-center items-center'>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        value=""
        className='btn btn-primary'
        onClick={ handleClick }
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        value="food"
        className='btn btn-primary'

        onClick={ handleClick }

      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        value="drink"
        className='btn btn-primary'

        onClick={ handleClick }

      >
        Drinks
      </button>
    </div>
  );
};
export default DoneRecipesFilter;
