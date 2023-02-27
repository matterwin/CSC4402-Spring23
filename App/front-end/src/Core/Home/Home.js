import React from 'react'

import './Home.css'

function Home() {
  return (
    <div>
      <div className="container">
        <div>
          <h1 className='home-title'>Movies reviewed, opinions shared</h1>
          <p className="subtext-title">
            Discover new favorites and join the conversation with our user-driven movie review platform
          </p>
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

        <div>
          Unlock the magic of the movies with our expert reviews and diverse perspectives, as we guide you through the world of cinema.
        </div>
      </div>

      <div className='space'>&nbsp;</div>
      <div className="container-bottom">
        {/* <div className='three-cards'>
          
        </div> */}
        
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