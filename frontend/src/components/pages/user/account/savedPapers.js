/* Display randomly generated papers on the main page. */

import React from 'react';
import CardItem from '../../../website/CardItem';
import './savedPapers.css'

function paperItem() {
  return (
    <div className='cards'>
      <h1>Your Saved Papers</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-home.jpg'
              text='Random Paper Title for Artificial Intelligence'
              label='Random Paper'
              path='/'
            />
            <CardItem
              src='images/img.jpg'
              text='Random Paper Title for Computer Vision and Pattern Recognition'
              label='Random Paper'
              path='/'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Random Paper Title for Parallel Processing'
              label='Random Paper'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-7.jpg'
              text='Random Paper Title for Artificial Intelligence'
              label='Random Paper'
              path='/details'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Random Paper Title for Computer Vision and Pattern Recognition'
              label='Random Paper'
              path='/detail'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Random Paper Title for Parallel Processing'
              label='Random Paper'
              path='/details'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default paperItem;