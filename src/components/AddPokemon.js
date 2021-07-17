import React, { useState } from 'react';
import axios from 'axios'

const AddPokemon = (props) => {

    const [newPokemon, setNewPokemon] = useState({ name: "", hp: "", damage: "", defense: "", image: "", elementtype: "" });

    const addNewPokemon = async () => {
        console.log(newPokemon)
        try {
            let config = {
                headers: {
                    'Content-Type': 'application/json'
                }
              }
              let data = JSON.stringify(newPokemon)
           let response= await axios.post("https://pokemon-api-node.herokuapp.com/poke-api/v1/pokemon",data,config)
              alert(response)
        } catch (error) {
            alert(error)
        }
    }
    

    const handleChange = (e) => {
        setNewPokemon({
            ...newPokemon, [e.target.name]: e.target.value
        })
    }

    const { name, hp, damage, defense, image, elementtype } = newPokemon;

    return (
        <>
            <div className="ui grid container">
                <form className="ui form" onSubmit={addNewPokemon}>
                    <div className="field">
                        <label>Nombre</label>
                        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={name} required />
                    </div>
                    <div className="field">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="Sangre" onChange={handleChange} value={hp} required />
                    </div>
                    <div className="field">
                        <label>Daño</label>
                        <input type="text" name="damage" placeholder="Daño" onChange={handleChange} value={damage} required />
                    </div>
                    <div className="field">
                        <label>Defensa</label>
                        <input type="text" name="defense" placeholder="Defensa" onChange={handleChange} value={defense} required />
                    </div>
                    <div className="field">
                        <label>Imagen</label>
                        <input type="text" name="image" placeholder="URL Imagen" onChange={handleChange} value={image} required />
                    </div>
                    <div className="field">
                        <label>Tipo</label>
                        <input type="text" name="elementtype" placeholder="Tipo" onChange={handleChange} value={elementtype} required />
                    </div>
                    <button className="positive ui button">Agregar</button>
                </form>
            </div>

        </>
    )
}

export default AddPokemon;