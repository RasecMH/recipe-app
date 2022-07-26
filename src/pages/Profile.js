import React from 'react';
import { PropTypes } from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileInfo from '../components/ProfileInfo';

const Profile = ({ history }) => (
  <div className="h-screen">
    <Header title="Profile" history={ history } />
    <ProfileInfo />
    <Footer />
  </div>
);

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.fuc,
  }),
}.isRequired;

export default Profile;
