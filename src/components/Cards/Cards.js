import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import {Link} from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      <Link to='/cursos'><h1>Ver todos los cursos disponibles</h1></Link>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/idiomas.jpg'
              text='Inglés, Francés, Aleman... Ver Todo'
              label='Clases de idioma'
              path='/cursos'
            />
            <CardItem
              src='/images/ciencias.jpg'
              text='Matemática, Física, Química... Ver Todo'
              label='Clases de ciencias'
              path='/cursos'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/tecnologia.jpg'
              text='Informática, Programación, Diseño gráfico... Ver Todo'
              label='Informática y tecnología'
              path='/cursos'
            />
            <CardItem
              src='/images/img-4.jpg'
              text='Guitarra, Piano, Fotografía... Ver Todo'
              label='Música, arte y deportes'
              path='/cursos'
            />
            <CardItem
              src='/images/empresas.jpg'
              text='Derecho, Economía, Contabilidad... Ver Todo'
              label='Economía, empresas y humanidades'
              path='/cursos'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;