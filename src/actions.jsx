// actions.js
export const fetchCharactersStart = () => ({
    type: 'FETCH_CHARACTERS_START',
  });
  
  export const fetchCharactersSuccess = (characters) => ({
    type: 'FETCH_CHARACTERS_SUCCESS',
    payload: characters,
  });
  
  export const fetchCharactersError = (error) => ({
    type: 'FETCH_CHARACTERS_ERROR',
    payload: error,
  });
  