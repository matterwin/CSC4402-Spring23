import React, { useState, useEffect } from 'react';
import NavLoggedIn from './NavLoggedIn';
import NavLoggedOut from './NavLoggedOut';
import readCookies from '../../Hooks/readCookies';

function ChooseNav() {
  const [userLoggedIn, setUserLoggedId] = useState('');

  useEffect(() => {
    setUserLoggedId(readCookies());
  }, []);

  return (
    <div>
      {userLoggedIn ? (
        <NavLoggedIn />
      ) : (
        <NavLoggedOut/>
      )}
    </div>
  );
}

export default ChooseNav;