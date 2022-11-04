/* Display randomly generated papers on the main page. */

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-home.jpg'
              text='Paper Title for Artificial Intelligence'
              label='Saved Paper'
              path='/'
            />
            <CardItem
              src='images/img.jpg'
              text='Paper Title for Computer Vision and Pattern Recognition'
              label='Saved Paper'
              path='/'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Paper Title for Parallel Processing'
              label='Saved Paper'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;