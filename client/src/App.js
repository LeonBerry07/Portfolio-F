import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useEffect, useState } from 'react';

function App() {

  const [games, setGames] = useState([]);

  const onSearch = (name) => {

      fetch(`http://localhost:3001/gamesbyname?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        if(data.length > 0) {
          setGames(() => [...data]);
        } else {
          setGames(() => []);
          alert('No hay juegos con ese nombre');
        }
      })
 }

 const [genres, setGenres] = useState([]);

  const getGenres = () => {

      fetch(`http://localhost:3001/genres`)
      .then((response) => response.json())
      .then((data) => {
        if(data.length > 0) {
          setGenres(() => [...data]);
        } else {
          setGenres(() => []);
          alert('No hay juegos con ese nombre');
        }
      })
 }

 const [platforms, setPlatforms] = useState([]);

  const getPlatforms = () => {

      fetch(`http://localhost:3001/platforms`)
      .then((response) => response.json())
      .then((data) => {
        if(data.length > 0) {
          setPlatforms(() => [...data]);
        } else {
          setGenres(() => []);
          alert('No hay juegos con ese nombre');
        }
      })
 }

 useEffect(() => {
  onSearch('');
  getGenres();
  getPlatforms();
}, []);

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Cards games={games} onSearch={onSearch} genres={genres} getGenres={getGenres}/>}/>
          <Route path="/detail/:id" element={<Detail/>}/>
          <Route path="/form" element={<Form platforms={platforms} genres={genres}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
