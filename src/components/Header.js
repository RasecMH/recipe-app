import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { sendSearchStatus } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = ({ title, search }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSearchBtn = () => {
    dispatch(sendSearchStatus());
  };

  return (
    <div
      className='
    flex 
    justify-between
    items-center
    px-3
    pt-3
    pb-3
    bg-red-900
    text-white
    '>
      <button
        type='button'
        data-testid='profile-top-btn'
        onClick={() => history.push('/profile')}
        src={profileIcon}>
        <FontAwesomeIcon icon={faUser} className='h-7' />
      </button>
      <h2 data-testid='page-title'>{title}</h2>
      {search && (
        <button
          search
          type='button'
          data-testid='search-top-btn'
          onClick={handleSearchBtn}
          src={searchIcon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='h-7' />
        </button>
      )}
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool,
}.isRequired;

export default Header;
