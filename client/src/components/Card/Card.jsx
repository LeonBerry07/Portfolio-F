import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ id, name, genres, image }) {
    return (
        <div className='card'>

            <div className='imgdiv'>
            <img className='imgh' src={image} alt="" />
            </div>

            <div className='name'>
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            </Link>
            </div>

            <div className='genres'>
            <h2>Genres: {genres.map((gen) => {return gen})}</h2>
            </div>

        </div>
    );
};