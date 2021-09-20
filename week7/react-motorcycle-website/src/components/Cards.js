import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Pick A Class</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.freeimages.com/images/small-previews/555/burnout-1313073.jpg'
              text='Sport'
              label='Performance'
              path='/services'
            />
            <CardItem
              src='https://media.istockphoto.com/photos/test-drive-with-honda-motorcycles-picture-id1257385725?k=20&m=1257385725&s=612x612&w=0&h=zUCDUE63Io-BNAeO-u3Sn8YcuVJhwyuIZRKdA-o4-MY='
              text='Naked'
              label='Muscle'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://media.istockphoto.com/photos/harley-davidson-going-along-a-narrow-mountain-road-during-meeting-in-picture-id1009060146?k=20&m=1009060146&s=612x612&w=0&h=IwvmnFaMvBf8if26RW3FXUB1hObGaTd413edyta7nPY='
              text='Cruiser'
              label='Power'
              path='/services'
            />
            <CardItem
              src='https://media.istockphoto.com/photos/jumping-over-the-sunset-picture-id486470769?k=20&m=486470769&s=612x612&w=0&h=6TY8BqeUY90mqqRpJ7U16MvREpmRYeMmb6JjVisaxss='
              text='Dual-Sport'
              label='All Terrain'
              path='/products'
            />
            <CardItem
              src='https://media.istockphoto.com/photos/happy-driver-riding-harley-davidson-picture-id458461929?k=20&m=458461929&s=612x612&w=0&h=mnVncy1wOc6o1mL1oPZOBl0ahlDCcDx_4egG0yYFG4I='
              text='Touring'
              label='Travel'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;