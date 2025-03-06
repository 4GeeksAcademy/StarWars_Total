// useGlobalReducer.jsx
import { useContext, useReducer, createContext } from "react";
import { initialStore } from "../store";  // Asegúrate de que la ruta sea correcta
import storeReducer from "../reducers/Reducer";  // Asegúrate de que tu reducer esté importado

const StoreContext = createContext();

function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(storeReducer, initialStore); // Usa el estado inicial

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStore = () => useContext(StoreContext);

export default StoreProvider;