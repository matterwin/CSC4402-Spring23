import React from 'react';
import Divider from '@mui/material/Divider';
import marvel from '../Videos/MARVEL-INTRO-2021.mp4'
import mario from '../Videos/mario.mp4'

import './Home.css'

function Home() {
  return (
    <div>
      <div className="container">
        <div>
          <h1 className='home-title'>Movies reviewed, opinions shared</h1>
          <p className="subtext-title">
            Discover new favorites and join the conversation with our user-driven movie review platform
            <Divider sx={{ my: 5.5, borderWidth: '0.25rem', borderRadius: '20px', borderColor: '#949494', 
            width: '50px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '0px'
            }} 
          />
          </p>
          <div className="container-users">
            <div>
              <h2>100+ million</h2>
              <p>yearly visitors to Movie App</p>
            </div>
            <div>
              <h2>10+ genres</h2>
              <p>out there to search</p>
            </div>
            <div>
              <h2>100+ movies</h2>
              <p>to rate and review</p>
            </div>
            <div>
              <h2>5000+</h2>
              <p>ratings and reviews</p>
            </div>
          </div>
          <div className='space'>&nbsp;</div>
        </div>
      </div>

      <div className='space'>&nbsp;</div>

      <div className="container-bg-color">

      <div className="note-cards">
          <div className="card1">
            hi
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="card1">
            hi
          </div>
        </div>

        <div className='space'>&nbsp;</div>

        <div className="cinema">
          <p>
            <span style={{'--index': 0}} data-word="cinema">Unlock</span> 
            <span style={{'--index': 1}}>&nbsp;the</span> 
            <span style={{'--index': 2}}>&nbsp;magic </span>
            <span style={{'--index': 3}}>&nbsp;of </span>
            <span style={{'--index': 4}}>&nbsp;the </span>
            <span style={{'--index': 5}}>&nbsp;movies </span>
            <span style={{'--index': 6}}>&nbsp;with </span>
            <span style={{'--index': 7}}>&nbsp;our </span>
            <span style={{'--index': 8}}>&nbsp;expert </span>
            <span style={{'--index': 9}}>&nbsp;reviews </span>
            <span style={{'--index': 10}}>&nbsp;and </span>
            <span style={{'--index': 11}}>&nbsp;diverse </span>
            <span style={{'--index': 12}}>&nbsp;perspectives, </span>
            <span style={{'--index': 13}}>&nbsp;as </span>
            <span style={{'--index': 14}}>&nbsp;we </span>
            <span style={{'--index': 15}}>&nbsp;guide </span>
            <span style={{'--index': 16}}>&nbsp;you </span>
            <span style={{'--index': 17}}>&nbsp;through </span>
            <span style={{'--index': 18}}>&nbsp;the </span>
            <span style={{'--index': 19}}>&nbsp;world </span>
            <span style={{'--index': 20}}>&nbsp;of  </span>
            <span style={{'--index': 21}} data-word="cinema">&nbsp;cinema</span>
          </p>
        </div>
      </div>

      <div className='space'>&nbsp;</div>
      <div className='space'>&nbsp;</div>
      <div className="container-bottom">
        {/* <div className='three-cards'>
          
        </div> */}
        <div className="container-movies">
          <div>
          <div className="side-movie">
                <video className='actual-movie' loop muted autoPlay>
                  <source src={mario} type="video/mp4" />
                </video>
              </div>
          </div>
            <div>
              <div className="mid-movie">
                <video className='actual-movie' loop muted autoPlay>
                  <source src={marvel} type="video/mp4" />
                </video>
              </div>
            </div>
            <div>
            <div className="side-movie">
                <video className='actual-movie' loop muted autoPlay>
                  <source src={marvel} type="video/mp4" />
                </video>
              </div>
            </div>
        </div>
        <div className="stuff">
          Test
        </div>
        <div className='space'>&nbsp;</div>
        <div className='space'>&nbsp;</div>
        <div className='space'>&nbsp;</div>
        <div className='space'>&nbsp;</div>
        <div className='space'>&nbsp;</div>
      </div>
      <div className='space'>&nbsp;</div>
    </div>
  );
}

export default Home;