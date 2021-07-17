import React from 'react';
import { useSelector } from 'react-redux';

const PokemonComponent = () => {

    const pokemons = useSelector((state) => state.allPokemons.pokemons);

    const deletePokemon = async (id) => {
        fetch(`https://pokemon-api-node.herokuapp.com/poke-api/v1/pokemon/?id=${id}`, {
            method: 'DELETE',
        }).then(res =>{ console.log(res)
            window.location.reload();
        })

    }
    

    const renderList = pokemons.map((pokemon) => {
        const { _id, name, hp, damage, defense, elementtype, image } = pokemon;

        return (
            <div className="four wide column " key={_id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={name} />
                        </div>
                        <div className="content">
                            <div className="header">{name}</div>
                            <div className="meta price">Vida: {hp}</div>
                            <div className="meta">Daño: {damage}</div>
                            <div className="meta">Defensa: {defense}</div>
                            <div className="meta">Tipo: {elementtype}</div>
                            <div className="extra content icon-delete">
                                <div className="icons" onClick={() => deletePokemon(_id)}>
                                    <i class="trash icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default PokemonComponent;