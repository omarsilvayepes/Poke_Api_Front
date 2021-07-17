import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemons';

const reducers = combineReducers({
    allPokemons: pokemonsReducer,
});

export default reducers;