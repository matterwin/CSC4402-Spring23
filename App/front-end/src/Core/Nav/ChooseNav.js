import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import OtherNav from './OtherNav';
import readCookies from '../../Hooks/readCookies';

function ChooseNav() {
  const [userLoggedIn, setUserLoggedId] = useState('');

  useEffect(() => {
    setUserLoggedId(readCookies());
  }, []);

  return (
    <div>
      {userLoggedIn ? (
        <Navbar />
      ) : (
        <OtherNav />
      )}
    </div>
  );
}

export default ChooseNav;