import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    city: undefined,
    dates: [],
    options: {
        adults: 1,
        children: 0,
        room: 0,
    }
}

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return { ...state, ...action.payload };
        case "SET_CITY":
            return { ...state, city: action.payload };
        case "SET_DATES":
            return { ...state, dates: action.payload };
        case "SET_OPTION":
            return { ...state, options: action.payload };
        default:
            return state;
    }
};

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
    return (
        <SearchContext.Provider value={{ city: state?.city, dates: state?.dates, options: state?.options, dispatch }}>
            {children}
        </SearchContext.Provider>
    );
};
