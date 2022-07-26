import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import shareIcon from '../images/shareIcon.svg';
import blackHearthIcon from '../images/blackHeartIcon.svg';

const FavoriteRecipeCard = () => {
  const filterType = useSelector((state) => state.reducer.filterType);
  const [favoriteRecipes,
    setFavoriteRecipes,
  ] = useLocalStorage('favoriteRecipes', []);

  const unFav = (recipe) => {
    const findObj = favoriteRecipes.find((item) => item === recipe);
    setFavoriteRecipes([...favoriteRecipes.filter((remove) => remove !== findObj)]);
  };
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
        .filter((favRecipe) => favRecipe.type.includes(filterType))
        .map((recipe, index) => (
          <div 
          className='card w-36 bg-base-100 shadow-xl flex items-center justify-center'
          key={ recipe.id }>
            { recipe.type === 'food'
              ? (
                <Link
                  to={ `/foods/${recipe.id}` }
                >
                  <img
                    width="100px"
                    src={ recipe.image }
                    alt="img card"
                    className='w-full'
                    data-testid={ `${index}-horizontal-image` }
                  />
                </Link>)
              : (
                <Link
                  to={ `/drinks/${recipe.id}` }
                >
                  <img
                    width="100px"
                    src={ recipe.image }
                    alt="img card"
                    className='w-full'

                    data-testid={ `${index}-horizontal-image` }
                  />
                </Link>
              )}
            <div className='card-body'>
              <div className='flex justify-between'>
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
                <div className='flex gap-2'>
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
                  <button
                    type="button"
                    onClick={ () => unFav(recipe) }
                  >
                    <img
                      src={ blackHearthIcon }
                      width="15px"
                      alt="share-icon"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                    />
                  </button>
                </div>
              </div>
              { recipe.type === 'drink'
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
              
            </div>
          </div>
        ))}
    </div>

  );
};

export default FavoriteRecipeCard;
