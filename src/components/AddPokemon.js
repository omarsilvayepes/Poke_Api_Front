import React, { useState } from 'react';
import axios from 'axios'

const AddPokemon = (props) => {

    const [newPokemon, setNewPokemon] = useState({ name: "", hp: "", damage: "", defense: "", image: "", elementtype: "" });

    const addNewPokemon = async () => {
        console.log(newPokemon)
        try {
            let config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
              }
              let data = JSON.stringify(newPokemon)
           let response= await axios.post("https://pokemon-api-node.herokuapp.com/poke-api/v1/pokemon",{name:"buenosdias",hp:54,damage:50,defence:80,image:"sdfkosmdsdfsdfklfmsdklfm",elementtype:"dsfsdfsdfdfsdfsd"},config)
          /*  const response = await fetch("https://pokemon-api-node.herokuapp.com/poke-api/v1/pokemon", {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'text/plain'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: newPokemon // body data type must match "Content-Type" header
              });*/
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