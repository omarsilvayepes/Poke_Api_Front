import { ActionTypes } from '../constants/action-types';

export const getPokemons = (pokemons) => {
    return {
        type: ActionTypes.GET_POKEMONS,
        payload: pokemons,
    };
};