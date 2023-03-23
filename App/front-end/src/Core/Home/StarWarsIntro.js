import React, { useState, useEffect } from 'react';
import './StarWarsIntro.css';

const StarWarsIntro = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Set the animation class to trigger the animation
    setAnimationClass('animate');
  }, []);

  return (
    <div className="star-wars-intro">
      <div className={`crawl ${animationClass}`}>
        <div className="title">
          <p>
            Turmoil has engulfed the Galactic Republic.
            The taxation of trade routes to outlying star systems is in dispute.
            Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.
            While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarWarsIntro;
