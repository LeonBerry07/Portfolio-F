import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";
import './Detail.css';

export default function Detail() {

    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {

        axios(`http://localhost:3001/videogames/${id}`)
        .then((response) => setGame(response.data));

    }, [id]);

    return (
        <div className='detail'>
            {game.name ? (
                
                <>
                <Link to='/home'>
                <button className='b'>Back To Home</button>
                </Link>
                <h2 className='info'>ID: {game.id}</h2>
                <h2 className='info'>Título: {game.name}</h2>
                <img className='img' src={game.image} alt=""/>
                <h2 className='info'>Descripción: {game.description}</h2>
                <h2 className='info'>Plataformas: {game.platforms}</h2>
                <h2 className='info'>Fecha de Lanzamiento: {game.released}</h2>
                <h2 className='info'>Rating: {game.rating}</h2>
                <h2 className='info'>Genres: {game.genres}</h2>
                </>
            ):(
                <h1>Loading....</h1>
                )}
        </div>
    );
};