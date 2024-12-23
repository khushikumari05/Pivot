import React from 'react';

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, types, sprite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300">
      <img src={sprite} alt={name} className="w-32 h-32 mx-auto" />
      <h3 className="text-center text-xl font-bold">{name}</h3>
      <p className="text-center text-gray-500">#{id}</p>
      <div className="flex justify-center gap-2 mt-2">
        {types.map((type) => (
          <span key={type} className="px-2 py-1 bg-blue-100 rounded text-blue-700">
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
