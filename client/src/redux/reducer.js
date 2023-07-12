import { GET_ALL, FILTERED_BY_GENRES, FILTERED_BY_SOURCE, ORDERED_BY_NAME, ORDERED_BY_RATING, CREATE_VIDEOGAME } from './action-types';

let initialState = {
    allMyGames: [],
    myGames: [],
    myG: [],
    game: []
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL:
            return {
                ...state,
                allMyGames: payload,
                myGames: payload,
                myG: payload
            };

        case FILTERED_BY_GENRES:

            const genresFiltered = state.myGames.filter((game) =>
                game.genres.includes(payload)
            );

            return {
                ...state,
                allMyGames:
                payload === 'All'
                ? [...state.myGames] 
                : genresFiltered,
                myG:
                payload === 'All'
                ? [...state.myGames] 
                : genresFiltered
            }

        case FILTERED_BY_SOURCE:

            const sourcesFiltered = state.myG.filter((game) =>
                game.source.includes(payload)
            );

            return {
                ...state,
                allMyGames:
                payload === 'All'
                ? [...state.myG] 
                : sourcesFiltered
            }

        case ORDERED_BY_NAME: 

            const myGamesCopy = [...state.allMyGames];

            let sortedGames;

            if (payload === 'A') {
                sortedGames = myGamesCopy.slice().sort((a, b) => {
                  const titleA = a.name.toLowerCase();
                  const titleB = b.name.toLowerCase();
                  return titleA.localeCompare(titleB);
                });
              } else if (payload === 'D') {
                sortedGames = myGamesCopy.slice().sort((a, b) => {
                  const titleA = a.name.toLowerCase();
                  const titleB = b.name.toLowerCase();
                  return titleB.localeCompare(titleA);
                });
              } else {
                sortedGames = myGamesCopy;
              }

            return {

                ...state,
                allMyGames: sortedGames
            };

        case ORDERED_BY_RATING:

            const myGCopy = [...state.allMyGames];

            let ratedGames;

            if (payload === 'Y') {
                ratedGames = myGCopy.sort((a, b) => a.rating - b.rating)
              } else if (payload === 'N') {
                ratedGames = myGCopy.sort((a, b) => b.rating - a.rating)
              } else {
                ratedGames = myGCopy;
              }

            return {
                ...state,
                allMyGames: ratedGames
            };
        
        case CREATE_VIDEOGAME:
            return {
              ...state, 
              allMyGames: [...state.allMyGames, payload]
            };    

        default:
            return {...state};
    }
};

export default reducer;