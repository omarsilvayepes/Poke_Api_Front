import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/actions/index';
import PokemonComponent from './PokemonComponent';

const PokemonsList = () => {
    const pokemons = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchPokemons = async () => {
        const response = await axios.get('https://pokemon-api-node.herokuapp.com/poke-api/v1/pokemon')
            .catch((err) => {
                console.log("ERROR", err)
            });
        dispatch(getPokemons(response.data));
    }

    useEffect(() => {
        fetchPokemons();
    }, []);

    return (
        <div className="ui grid container">
            <PokemonComponent />
        </div>
    );
}

export default PokemonsList;