import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import OtherNav from './OtherNav';
import readCookies from '../../Hooks/readCookies';

function ChooseNav() {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    setUserId(readCookies());
  }, []);

  return (
    <div>
      {userId ? (
        <Navbar />
      ) : (
        <OtherNav />
      )}
    </div>
  );
}

export default ChooseNav;