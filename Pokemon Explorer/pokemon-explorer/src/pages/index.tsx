import React, { useState } from 'react';
import PokedexGrid from '../components/PokedexGrid';
import PokemonTypeFilter from '../components/PokemonTypeFilter';

const Home: React.FC = () => {
  const availableTypes = ['fire', 'water', 'grass', 'electric', 'rock', 'psychic', 'normal'];
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pokemon Explorer</h1>
      <PokemonTypeFilter
        availableTypes={availableTypes}
        selectedTypes={selectedTypes}
        onTypeSelect={setSelectedTypes}
      />
      <PokedexGrid />
    </div>
  );
};

export default Home;
