import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeCard = ({ id, idRecipe, title, image, isDrink }) => (
  <Link to={ isDrink ? `/drinks/${idRecipe}` : `/foods/${idRecipe}` }>
    <div data-testid={ `${id}-recipe-card` } className="recipe-card">
      <img
        data-testid={ `${id}-card-img` }
        src={ image }
        alt={ title }
        className="img-card"
      />
      <h2 data-testid={ `${id}-card-name` }>{title}</h2>
    </div>
  </Link>
);

RecipeCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  idRecipe: PropTypes.string.isRequired,
  isDrink: PropTypes.bool.isRequired,
};

export default RecipeCard;
