import StoreProvider from '../hooks/useGlobalReducer';
import React from 'react';
import CharacterCard from '../components/CharacterCard';
import { Provider } from 'react-redux';
import store from '../store'; 

function Home() {
	return (

		<Provider store={store}>

		  <div className="carousel">
			
			  <CharacterCard />  
			
		  </div>
		  
		</Provider>
	  );
	}

export default Home;