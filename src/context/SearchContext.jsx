import { createContext } from "react"


const INTIAL_STATE = {
    city: undefined,
    dates: [],
    options:{
        adults: undefined,
        children: undefined,
        room: undefined,
    }

}
export const SearchContext = createContext(INTIAL_STATE) => {
  const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH":
            return {...state,...action.payload }
        case "SET_CITY":
            return {...state, city: action.payload }
        case "SET_DATES":
            return {...state, dates: action.payload }
        case "SET_OPTION":
            return {...state, options: action.payload }
        default:
            return state
    }
  }
  export const SearchContextProvider =({children})=> {
    const [state, dispatch] = useReducer(SearchReducer, INTIAL_STATE)
    return (
      <SearchContext.Provider value={{city: state.city, date: state.date, options: state.options, dispatch}}>
        {children}
      </SearchContext.Provider>
    )
  }
    return (
    <div>SearchContext</div>
  )
}
