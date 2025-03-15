import { useState } from "react";
import Search from "../components/search";
import Card from "../components/cards";

function App() {
  const [pokemonData, setPokemonData] = useState(null);
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemon = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}${id}`);
      if (!response.ok) {
        throw new Error("No se encontró el Pokémon");
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error(error.message);
      setPokemonData(null);
    }
  };

  return (
    <>
    <div class='container '>
        

<div class='d-flex justify-content-center'>
    
    
    <Search onSearch={fetchPokemon} /></div>
    <div class='d-flex justify-content-center'>
        

      <br/>
      {pokemonData ? <Card pokemonData={pokemonData} /> : <p>No se encontró el Pokémon</p>}
      
    </div>
    </div>
    </>
  );
}

export default App;
