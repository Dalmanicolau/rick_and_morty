import { useReducer } from "react";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites : [],
    allCharacters : []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(char=>char.id!==action.payload)
            }
        case ORDER:
            return{
                ...state,
                myFavorites: action.payload === "Ascendente"
                ? state.allCharacters.sort((a,b)=>a.id - b.id)
                : state.allCharacters.sort((a,b)=>b.id - a.id)
            }
            default:
            return {...state}
    }
};

export default rootReducer;