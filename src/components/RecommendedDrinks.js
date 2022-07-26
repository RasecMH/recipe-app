/* eslint-disable   */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDrinksToState } from '../redux/actions';

const RecommendedDrinks = () => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.reducer.drinksData);
  const MAX_REC_CARD = 6;

  useEffect(() => {
    dispatch(getDrinksToState(''));
  }, []);

  return (
    <li className="flex flex-wrap items-center justify-center gap-5 mt-5 z-0">
      {[...drinks].splice(0, MAX_REC_CARD).map((rec, i) => (
        <Link
          key={ i }
          to={ `/drinks/${rec.idDrink}` }
          style={ { visibility: `${i < 2 ? 'visible' : 'hidden'}` } }
        >
          <div className="
    card
    w-42
    bg-base-100
    shadow-xl">
            <figure>
              <img
                data-testid={ `${i}-recomendation-card` }
                src={ rec.strDrinkThumb }
                alt={ rec.strDrink }
                className="h-36"
              />
            </figure>

            <div className='card-body'>
              <p
                data-testid={ `${i}-recomendation-title` }
              >
                {rec.strDrink}
              </p>
            </div>
          </div>
        </Link>))}
    </li>
  );
};

export default RecommendedDrinks;
