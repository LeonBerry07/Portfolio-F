import { useState } from "react";
import { Link } from 'react-router-dom';
import './SearchBar.css';

export default function SearchBar({getAll}) {

   const [title, setTitle] = useState("");

   const handleChange = (event) => {
      setTitle(event.target.value);
   }

   const handleSearch = () => {
      if (title.trim() !== "") {
         getAll(title);
      }
   }
   
   return (
      <div className="nav">

      <div className="search">
      <Link to={'/'}>
      <label className="vid">PI Videogames</label>
      </Link>
      <input className="box" type='search' onChange={handleChange}/>
      <button className="button" onClick={handleSearch}>Search</button>
      </div>

      {/* <div className="firm"> */}
      <Link to={'/form'}>
      <button className="button">Create Videogame</button>
      </Link>
      {/* </div> */}

      </div>
   );
}