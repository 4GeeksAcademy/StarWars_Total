import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'  // Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import router from "./routes";  // Import the router configuration
import StoreProvider from './hooks/useGlobalReducer';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';


const Main = () => {
    return (
        <React.StrictMode>
           
            <StoreProvider>

                <Provider store={store}>
                      <Home />
                </Provider>,


                <RouterProvider router={router}>
                </RouterProvider>

            </StoreProvider>
        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
