import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { sendSearchStatus } from '../redux/actions';

const Header = ({ title, search }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSearchBtn = () => {
    dispatch(sendSearchStatus());
  };

  return (
    <div>
      <h2
        data-testid="page-title"
      >
        {title}
      </h2>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
      >
        <img src={ profileIcon } alt="profile-icon" />
      </button>
      { search && (
        <button
          search
          type="button"
          data-testid="search-top-btn"
          onClick={ handleSearchBtn }
          src={ searchIcon }
        >
          <img src={ searchIcon } alt="search-icon" />
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
