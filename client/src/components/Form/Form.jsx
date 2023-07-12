import './Form.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions';

export default function Form({ platforms, genres }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    platforms: '',
    image: '',
    released: '',
    rating: 0,
    genres: ''
  });

  const [errors, setErrors] = useState({
    name: true,
    description: true,
    platforms: true,
    image: true,
    released: true,
    rating: true,
    genres: true
  });

  const dispatch = useDispatch();

  useEffect(() => {
    Object.values(errors).some((error) => error);
  }, [errors]);

  const handleInputChange = (event) => {
    const { value, name } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    const newErrors = { ...errors };

    if (name === 'name') {
      newErrors.name = value.length > 50 || value.length === 0;
    }

    if (name === 'description') {
      newErrors.description = value.length > 200 || value.length === 0;
    }

    if (name === 'platforms') {
      newErrors.platforms = value === 'All';
    }

    if (name === 'image') {
      newErrors.image = value.length > 30 || value.length === 0;
    }

    if (name === 'released') {
      newErrors.released = value.length > 10 || value.length === null || value.length === 0;
    }

    if (name === 'rating') {
      newErrors.rating = value.length > 4 || value.length === 0;
    }

    if (name === 'genres') {
      newErrors.genres = value === 'All';
    }

    setErrors(newErrors);
  };

  const isFormValid = !Object.values(errors).some((error) => error);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      dispatch(actions.createVideogame(formData));
    } else {
      console.log('Hay errores en los campos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">

        <label className="name">Name: </label>
        <input className="input" type="text" name="name" onChange={handleInputChange} />
        {errors.name && <p style={{ color: 'red' }}>Nombre inválido</p>}

        <label className="name">Description: </label>
        <textarea className="input" name="description" onChange={handleInputChange} />
        {errors.description && <p style={{ color: 'red' }}>Escribe una descripción</p>}

        <label className="name">Platforms: </label>
        <select name="platforms" className="select" onChange={handleInputChange}>
          <option className="option" value="All">Platforms</option>
          {platforms.map(({ title }) => (
            <option className="option" value={title} key={title}>{title}</option>
          ))}
        </select>
        {errors.platforms && <p style={{ color: 'red' }}>Ingresa alguna plataforma</p>}

        <label className="name">Image: </label>
        <input className="input" type="text" name="image" onChange={handleInputChange} />
        {errors.image && <p style={{ color: 'red' }}>Imágen no válida</p>}

        <label className="name">Released Date: </label>
        <input className="input" type="text" name="released" onChange={handleInputChange} />
        {errors.released && <p style={{ color: 'red' }}>Fecha Inválida</p>}

        <label className="name">Rating: </label>
        <input className="input" type="number" name="rating" onChange={handleInputChange} />
        {errors.rating && (<p style={{ color: 'red' }}>Solo puntuaciones del 1 al 5, puede contener decimales</p>)}

        <label className="name">Genres: </label>
        <select name="genres" className="select" onChange={handleInputChange}>
          <option className="option" value="All">Genres</option>
          {genres.map(({ id, title }) => (
            <option className="option" value={title} key={title}>{title}</option>
          ))}
        </select>
        {errors.genres && <p style={{ color: 'red' }}>Selecciona un género</p>}

        <button className="cvid" type="submit" disabled={!isFormValid}>Create Videogame</button>
        {!isFormValid && <p style={{ color: 'red' }}>Todos los campos deben ser correctos</p>}

        <Link to={'/home'}>
          <button className="cvid">Back To Home</button>
        </Link>

      </div>
    </form>
  );
}
