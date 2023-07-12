import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import * as actions from '../../redux/actions';
import './Cards.css';

function Cards({ genres, getGenres, 
   getAll, filteredByGenres, filteredBySource, orderedByName, orderedByRating,
   allMyGames}) {

      useEffect(() => {
         getAll('');
         getGenres();
      }, []);

   const [currentPage, setCurrentPage] = useState(1);
   const gamesPerPage = 15;
   
   const indexOfLastGame = currentPage * gamesPerPage;
   const indexOfFirstGame = indexOfLastGame - gamesPerPage;
   const currentGames = allMyGames.slice(indexOfFirstGame, indexOfLastGame);
   
   const totalPages = Math.ceil(100 / gamesPerPage);

   const nextPage = () => {
      setCurrentPage(currentPage + 1);
    };
   
    const prevPage = () => {
      setCurrentPage(currentPage - 1);
    };

   // const allGames = games.filter((game) => currentGames.some((myGame) => myGame.id === game.id));

   // if(genres.length === 0){
   //    alert('lol');
   // }

   // const [selectedOptions, setSelectedOptions] = useState({
   //    genre: 'All',
   //    source: 'All',
   //    orderBy: 'Default',
   //  });
  
   //  const handleGenreChange = (event) => {
   //    const newGenre = event.target.value;
   //    setSelectedOptions((prevState) => ({
   //      ...prevState,
   //      genre: newGenre,
   //      source: 'All',
   //      orderBy: 'Default',
   //    }));
   //  };

   const handleFilterByGenres = (event) => {

      filteredByGenres(event.target.value);
   };

  const handleFilterBySource = (event) => {
   
   filteredBySource(event.target.value);
  };

  const handleOrderByName = (event) => {

   orderedByName(event.target.value);
  };

  const handleOrderByRate = (event) => {

   orderedByRating(event.target.value);
  };
   
   return <div className='buttons'>
      <SearchBar getAll={getAll}/>
      <button className="bpage" onClick={prevPage} disabled={currentPage === 1}>Prev. Page</button>
      <span className="bpage">Page {currentPage} of {totalPages}</span>
      <button className="bpage" onClick={nextPage} disabled={indexOfLastGame >= allMyGames.length}>Next Page</button>
      <div>
        <select className="select" onChange={handleFilterByGenres}>
            <option className="option" value="All">All Genres</option>
            {genres.map(({ title }) => {
               return (
                  <option className="option" value={title} key={title}>{title}</option>
               )
            })}
        </select>
        <select className="select" onChange={handleFilterBySource}>
            <option className="option" value="All">Sources</option>
            <option className="option" value="API">From Api</option>
            <option className="option" value="DB">From DataBase</option>
        </select>
        <select className="select" onChange={handleOrderByName}>
            <option className="option">ABC Order</option>
            <option className="option" value="A">Ascendant</option>
            <option className="option" value="D">Descendant</option>
        </select>
        <select className="select" onChange={handleOrderByRate}>
            <option className="option" value="W">Rating</option>
            <option className="option" value="Y">Max To Min</option>
            <option className="option" value="N">Min To Max</option>
        </select>
        </div>
        <div className='list'>
      {currentGames.map(({ id, name, genres, image }) => {
         return (
            <Card
            key = {id} 
            id = {id}
            name = {name}
            genres = {genres}
            image = {image}
            />
            );
         })}
         
         </div>
         <button className="bpage" onClick={prevPage} disabled={currentPage === 1}>Prev. Page</button>
         <span className="bpage">Page {currentPage} of {totalPages}</span>
         <button className="bpage" onClick={nextPage} disabled={indexOfLastGame >= allMyGames.length}>Next Page</button>
   </div>;
}

const mapDispatchToProps = (dispatch) => {
   return {
     getAll: (name) => dispatch(actions.getAll(name)),
     filteredByGenres: (value) => dispatch(actions.filteredByGenres(value)),
     filteredBySource: (value) => dispatch(actions.filteredBySource(value)), 
     orderedByName: (value) => dispatch(actions.orderedByName(value)),
     orderedByRating: (value) => dispatch(actions.orderedByRating(value))
   };
};
 

const mapStateToProps = (state) => {

   return {
       allMyGames: state.allMyGames
   }
}

export default connect( mapStateToProps, mapDispatchToProps )(Cards);