import { createContext, useReducer } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

const INITIAL_STATE = {
    city: undefined,
    dates: [],
    options: {
        adults: 1,
        children: 0,
        room: 1, // Changed default room count to 1
    },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return { ...state, ...action.payload };
        case "SET_CITY":
            return { ...state, city: action.payload || state.city }; // Ensure payload isn't null or undefined
        case "SET_DATES":
            return { ...state, dates: action.payload || state.dates }; // Ensure payload isn't null or undefined
        case "SET_OPTION":
            return { ...state, options: { ...state.options, ...action.payload } }; // Merge options to prevent overwriting
        default:
            return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider value={{ city: state.city, dates: state.dates, options: state.options, dispatch }}>
            {children}
        </SearchContext.Provider>
    );
};

// Define PropTypes for the component
SearchContextProvider.propTypes = {
    children: PropTypes.node.isRequired, // Mark 'children' as required
};
