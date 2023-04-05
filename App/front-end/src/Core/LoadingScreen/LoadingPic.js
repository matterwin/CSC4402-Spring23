import * as React from 'react';
import johncena from '../Videos/pika2.png'

import './LoadingPic.css';

export default function CircularIntegration() {

  return (
    <div className="loading-pfp-div">
        <img className="loading-profile-pic" src={johncena} alt="ProfilePicture" />                 
    </div>
  );
}