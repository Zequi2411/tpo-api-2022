import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HomeSection.css';

function HomeSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-pizarron1.mp4' autoPlay loop muted />
      <h1>SOMOS TUSCLASES.COM</h1>
      <p>Los mejores profesores particulares del país</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          VER CURSOS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          REGISTRATE <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HomeSection;