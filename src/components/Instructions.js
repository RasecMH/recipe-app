import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Instructions = ({ isDrink }) => {
  const drinkDetails = useSelector((state) => state.reducer.drinkDetails);
  const mealDetails = useSelector((state) => state.reducer.mealDetails);

  const getDrinkDetails = () => (
    <p
      data-testid="instructions"
      className='text-left'
    >
      {drinkDetails.length > 0 && drinkDetails[0].strInstructions}
    </p>
  );

  const getMealDetails = () => (
    <p
      data-testid="instructions"
      className='text-left mx-3'
    >
      {mealDetails.length > 0 && mealDetails[0].strInstructions}
    </p>
  );

  return (
    <div>
      {
        isDrink ? getDrinkDetails() : getMealDetails()
      }
    </div>
  );
};

Instructions.propTypes = {
  isDrink: PropTypes.bool.isRequired,
};

export default Instructions;
