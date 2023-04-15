import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

export const addFavorite = (character) =>{
    return{type :  ADD_FAV, payload : character}
};

export const removeFavorite = (id) =>{
    return{type :  REMOVE_FAV, payload : id}
};

export const filterCards = (gender) =>{
    return{type :  FILTER, payload : gender}
};

export const orderCards = (id) =>{
    return{type :  ORDER, payload : id}
};