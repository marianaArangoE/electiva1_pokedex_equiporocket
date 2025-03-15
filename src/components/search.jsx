import React, { useState } from 'react';

export default function Search({ onSearch }) {
  const [buscarPokemon, setBuscarPokemon] = useState('');

  const onChangeBuscarPokemon = (event) => {
    setBuscarPokemon(event.target.value);
  };

  const handleSearch = () => {
    if (buscarPokemon.trim()) {
      onSearch(buscarPokemon.toLowerCase())
    }
  };
; 
  return (
    <div className="container mt-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Busca tu Pokémon por id o nombre"
          value={buscarPokemon}
          onChange={onChangeBuscarPokemon}
        />
        <button className="btn btn-danger" onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
}
