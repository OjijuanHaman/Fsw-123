import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://cdn.videvo.net/videvo_files/video/free/2019-04/small_watermarked/190312_29_StadioOlimpicoAndFans_HD_008_preview.webm' autoPlay loop muted />
      <h1>Find What Fits You!</h1>
      <p>Whats your ideal Moto?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Why Ride?
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          MOTO VIDEOS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;