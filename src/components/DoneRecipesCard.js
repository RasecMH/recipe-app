import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import shareIcon from '../images/shareIcon.svg';
// faltando tag
const DoneRecipesCard = () => {
  const filterType = useSelector((state) => state.reducer.filterType);
  const [favoriteRecipes,
  ] = useLocalStorage('doneRecipes', []);

  const [clicked, setClick] = useState(false);

  const handleClick = (recipe) => {
    if (recipe.alcoholicOrNot) {
      copy(`http://localhost:3000/drinks/${recipe.id}`);
      setClick(true);
    } else copy(`http://localhost:3000/foods/${recipe.id}`);
    setClick(true);
  };

  return (
    <div className='flex flex-wrap items-baseline justify-center gap-5 mt-4 text-center h-full'>
      { favoriteRecipes
        .filter((doneRecipe) => doneRecipe.type.includes(filterType))
        .map((recipe, index) => (
          <div className='card w-36 bg-base-100 shadow-xl flex items-center justify-center' key={ recipe.id }>
            
            { recipe.type === 'food'
              ? (
                <Link
                  to={ `/foods/${recipe.id}` }
                >
                  <figure>
                    <img
                      src={ recipe.image }
                      alt="img card"
                      data-testid={ `${index}-horizontal-image` }
                    />
                  </figure>
                </Link>)
              : (
                <Link
                  to={ `/drinks/${recipe.id}` }
                >
                  <figure>
                    <img
                      src={ recipe.image }
                      alt="img card"
                      data-testid={ `${index}-horizontal-image` }
                    />
                  </figure>
                </Link>
              )}
              <div className='flex justify-between w-full px-3'>
                { recipe.type === 'food'
                ? (
                  <Link
                    to={ `/foods/${recipe.id}` }
                
                  >
                    <h3
                      data-testid={ `${index}-horizontal-name` }
                    >
                      {recipe.name}
                    </h3>
                  </Link>
                )
                : (
                  <Link
                    to={ `/drinks/${recipe.id}` }
                  >
                    <h3
                      data-testid={ `${index}-horizontal-name` }
                    >
                      {recipe.name}
                    </h3>
                  </Link>
                )}
                { clicked ? <p>Link copied!</p> : (
                <button
                  clicked={ clicked }
                  type="button"
                  onClick={ () => handleClick(recipe) }
                >
                  <img
                    src={ shareIcon }
                    width="15px"
                    alt="share-icon"
                    data-testid={ `${index}-horizontal-share-btn` }
                  />
                </button>)}
              </div>
            { recipe.alcoholicOrNot
          && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.alcoholicOrNot}
            </p>
          )}
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {recipe.nationality}
              {' '}
              {'-'}
              {' '}
              {recipe.category}
            </p>
            <span
              data-testid={ `${index}-horizontal-done-date` }
            >
              {recipe.doneDate}
            </span>
            
            {
              <div className='badge badge-outline mb-3'>
              <p
                data-testid={ `${index}-${recipe.tags[0]}-horizontal-tag` }
              >
                {recipe.tags[0]}
              </p>
              <p
                data-testid={ `${index}-${recipe.tags[1]}-horizontal-tag` }
              >
                {recipe.tags[1]}
              </p>
            </div>}
          </div>
        ))}
    </div>

  );
};

export default DoneRecipesCard;
