import { ActionTypes } from "../constants/action-types"

const initialState = {
    pokemons: [],
};

export const pokemonsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_POKEMONS:
            return { ...state, pokemons: payload };
        default:
            return state
    }
}