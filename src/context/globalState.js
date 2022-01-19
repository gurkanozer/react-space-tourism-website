import React, {createContext, useReducer} from 'react';
import initialStates from './initialStates'; 

export const GlobalContext = createContext(initialStates);

export const GlobalProvider = ({ children }) => {
    const theme = initialStates.theme;
    const destination = initialStates.destinations;
    const crew = initialStates.crew;
    const technology = initialStates.technology;

    return (
      <GlobalContext.Provider value={{ theme, destination, crew, technology }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  