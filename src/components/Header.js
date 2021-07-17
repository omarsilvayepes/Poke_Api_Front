import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <Link to="/" className="pokeapi">
                    <h2>PokeApi</h2>
                </Link>
            </div>
            <Link to="/upload" className="create">
                <div className="ui animated button primary" tabindex="0">
                    <div className="visible content" >Crear</div>
                    <div className="hidden content">
                        <i className="plus icon"></i>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Header;