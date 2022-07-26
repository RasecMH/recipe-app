import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMartiniGlassCitrus, faBurger } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <div className="fixed bottom-0 w-full px-3 bg-red-900 pt-3">
    <footer data-testid="footer" className="flex justify-center gap-6 ">

      <Link to="/drinks">
        <button type="button">
        <FontAwesomeIcon icon={faMartiniGlassCitrus} className='text-white h-7 mb-2' />
        </button>
      </Link>

      <Link to="/foods">
        <button type="button">
        <FontAwesomeIcon icon={faBurger} className=' text-white h-7' />
        </button>
      </Link>

    </footer>
  </div>
);

export default Footer;
