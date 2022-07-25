import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <div className="container-footer">
    <footer data-testid="footer" className="footer">

      <Link to="/drinks">
        <button type="button">
          <img
            src={ drinkIcon }
            alt="drinkIcon"
            data-testid="drinks-bottom-btn"
          />
        </button>
      </Link>

      <Link to="/foods">
        <button type="button">
          <img
            src={ mealIcon }
            alt="mealIcon"
            data-testid="food-bottom-btn"
          />
        </button>
      </Link>

    </footer>
  </div>
);

export default Footer;
