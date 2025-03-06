// CharacterCard.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharactersStart, fetchCharactersSuccess, fetchCharactersError } from '../actions';  // Asegúrate de tener estas acciones definidas

const CharacterCard = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchCharactersStart());
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        dispatch(fetchCharactersSuccess(data.results.slice(0, 3)));
      } catch (err) {
        dispatch(fetchCharactersError(err.toString()));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Character List</h1>
      
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterCard;
