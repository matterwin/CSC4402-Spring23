import React from 'react';
import { useEffect, useState } from 'react';
import readCookies from '../../../Hooks/readCookies';
import DefaultPic from "../../Videos/defaultPic.png";
import Tooltip from '@mui/material/Tooltip';

import './UserReviews.css'

function UserReviews() {

  const userId = readCookies();
  const [username, setUsername] = useState('');
  const [userProfilePic, setUserProfilePic] = useState("");
  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {

    const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.status === 404) {
        throw new Error("User not found");
      }
      return response.json();     
    })
    .then(data => {
      if(data) { 
        console.log(data);   
        setUsername(data.username);
        if(data.url == null)
          setUserProfilePic(DefaultPic);
      }
    })
    .catch(error => {       
      console.log("Error: " + error.message);
    });

  },[userId])

  const toggleFullDesc = () => {
    setShowFullDesc(!showFullDesc);
  };

  //

  return (
    <div>
      <div className='comment-container'>
          <div className='comment-flex-box'>
            <h2 className='reviews-heading'>Reviews</h2>
            <div className='comment-div'>
              <div className="comment-pfp-div">
                  <Tooltip title={username}>
                      <img className="profile-pic" src={userProfilePic} alt="ProfilePicture" />      
                  </Tooltip>            
              </div>  
              <div>
                <div className='comment-div-info'>
                  <div className='username'>
                    {username}
                  </div> 
                  <div className='desc'>
                  {showFullDesc ? (
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                      in a piece of classical Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia, looked up one of the more obscure Latin words, consectetur, from a
                      Lorem Ipsum passage, and going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                      1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                      and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                      of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                      "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                      <span className="see-less" onClick={toggleFullDesc}>
                        <p>Show less</p>
                      </span>
                    </p>
                  ) : (
                    <p className='fade-out'>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                      in a piece of classical Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia, looked up one of the more obscure Latin words, consectetur, from a
                      Lorem Ipsum passage
                      <span className="see-more" onClick={toggleFullDesc}>
                        &nbsp;...&nbsp;Show more
                      </span>
                    </p>
                  )}
                  </div>
                  <div className='usr-rating'>
                    <b>Rating:&nbsp;</b> 4.3/5
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='comment-flex-box'>
            <div className='comment-div'>
              <div className="comment-pfp-div">
                  <Tooltip title={username}>
                      <img className="profile-pic" src={userProfilePic} alt="ProfilePicture" />      
                  </Tooltip>            
              </div>  
              <div>
                <div className='comment-div-info'>
                  <div className='username'>
                    {username}
                  </div> 
                  <div className='desc'>
                  {showFullDesc ? (
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                      in a piece of classical Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia, looked up one of the more obscure Latin words, consectetur, from a
                      Lorem Ipsum passage, and going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum comes from sections
                      1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good 
                      and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                      of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                      "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                      <span className="see-less" onClick={toggleFullDesc}>
                        <p>Show less</p>
                      </span>
                    </p>
                  ) : (
                    <p className='fade-out'>
                      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                      in a piece of classical Latin literature from 45 BC, making it over 2000 years
                      old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                      Virginia, looked up one of the more obscure Latin words, consectetur, from a
                      Lorem Ipsum passage
                      <span className="see-more" onClick={toggleFullDesc}>
                        &nbsp;...&nbsp;Show more
                      </span>
                    </p>
                  )}
                  </div>
                  <div className='usr-rating'>
                    <b>Rating:&nbsp;</b> 4.3/5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default UserReviews;
