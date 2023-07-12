import { GET_ALL, FILTERED_BY_GENRES, FILTERED_BY_SOURCE, ORDERED_BY_NAME, ORDERED_BY_RATING, CREATE_VIDEOGAME } from './action-types';
import axios from 'axios';

export const getAll = (name) => {

   const endpoint = `http://localhost:3001/gamesbyname?name=${name}`;
   
   return (dispatch) => {
      axios.get(endpoint)
      .then(({data}) => {
         if(data.length > 0){
            dispatch({
               type: GET_ALL, 
               payload: data
            })
         } else {
            alert('No hay juegos con ese nombre');
         }
      })
   };
};

export const filteredByGenres = (value) => {

   return {type: FILTERED_BY_GENRES, payload: value}
};

export const filteredBySource = (value) => {

   return {type: FILTERED_BY_SOURCE, payload: value}
};

export const orderedByName = (value) => {
   
   return {type: ORDERED_BY_NAME, payload: value};
};

export const orderedByRating = (value) => {

   return {type: ORDERED_BY_RATING, payload: value}
};

// export const createVideogame = async (formData) => {

//    const endpoint = 'http://localhost:3001/videogames';
   
//    const response = await axios.post(endpoint, formData);

//    return {type: CREATE_VIDEOGAME, payload: response}
// };

export const createVideogame = (formData) => {
   return async (dispatch) => {
     try {
       const endpoint = 'http://localhost:3001/videogames';
       const response = await axios.post(endpoint, formData);
 
       dispatch({ type: CREATE_VIDEOGAME, payload: response.data });
     } catch (error) {
       console.error('Error creating videogame:', error);
     }
   };
 };