// SearchContext.js
import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    city: "",  // Default city state as an empty string
    dates: [],
    options: {
        adults: 1,
        children: 0,
        room: 1,
    },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return { 
                ...state, 
                city: action.payload.city, 
                dates: action.payload.dates, 
                options: action.payload.options 
            };
        case "SET_CITY":
            return { ...state, city: action.payload || state.city };
        case "SET_DATES":
            return { ...state, dates: action.payload || state.dates };
        case "SET_OPTION":
            return { ...state, options: { ...state.options, ...action.payload } };
        default:
            return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider value={{ 
            city: state.city, 
            dates: state.dates, 
            options: state.options, 
            dispatch 
        }}>
            {children}
        </SearchContext.Provider>
    );
};

SearchContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
