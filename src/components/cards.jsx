import React from "react";  

export default function Card({ pokemonData }) {


    const typeColors = {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    };
    console.log(typeColors[pokemonData?.types[0].type.name]);

    return (
        <div className="card shadow-lg rounded text-center" style={{ width: "320px" }}>
            <img 
                src={
                    pokemonData?.sprites.other.showdown.front_default 
                        ? pokemonData.sprites.other.showdown.front_default 
                        : pokemonData?.sprites.front_default
                } 
                className="card-img-top p-3" 
                alt={pokemonData?.name} 
            />
            <style>
                {`
                    .card-body {
                        background-color:${typeColors[pokemonData?.types[0].type.name]};
                    }
                `}
            </style>
            <div className="card-body ">

                <h2 className="card-title text-capitalize">{pokemonData?.name}</h2>
                <p className="card-text"><strong>Altura:</strong> {pokemonData?.height} dm</p>
                <p className="card-text"><strong>Peso:</strong> {pokemonData?.weight} hg</p>
                <p className="card-text"><strong>Tipo:</strong> {pokemonData?.types[0].type.name} </p>
                <p className="card-text">
                    <strong>Habilidad:</strong> {pokemonData?.abilities[0].ability.name}
                </p>
            </div>
        </div>
    );
}
