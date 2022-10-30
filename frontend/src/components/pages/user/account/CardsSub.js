/* Display randomly generated papers on the main page. */

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsSub() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <h1>Subscribed: Artifical Intelligence</h1>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-home.jpg'
                            text='Subscribed Recommendation Paper Title'
                            label='Subscribed'
                            path='/'
                        />
                        <CardItem
                            src='images/img.jpg'
                            text='Subscribed Recommendation Paper Title'
                            label='Subscribed'
                            path='/'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Subscribed Recommendation Paper Title'
                            label='Subscribed'
                            path='/'
                        />
                    </ul>
                </div>
                <h1>Subscribed: Software Engineering</h1>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-home.jpg'
                            text='Subscribed Recommendation Paper Title'
                            path='/'
                        />
                        <CardItem
                            src='images/img.jpg'
                            text='Subscribed Recommendation Paper Title'
                            label='Subscribed'
                            path='/'
                        />
                        <CardItem
                            src='images/img-1.jpg'
                            text='Subscribed Recommendation Paper Title'
                            label='Subscribed'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsSub;