
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/Reducer';  // Aquí va la importación de tus reducers

// Definir el estado inicial
export const initialStore = {
  // Agrega las propiedades necesarias para el estado inicial
  characters: [],
  loading: false,
  error: null,
};

// Configurar el store
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production', 
});

export default store;
