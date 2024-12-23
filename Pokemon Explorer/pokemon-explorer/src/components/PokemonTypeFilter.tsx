import React from 'react';

interface PokemonTypeFilterProps {
  availableTypes: string[];
  selectedTypes: string[];
  onTypeSelect: (types: string[]) => void;
}

const PokemonTypeFilter: React.FC<PokemonTypeFilterProps> = ({
  availableTypes,
  selectedTypes,
  onTypeSelect,
}) => {
  const toggleType = (type: string) => {
    const updatedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onTypeSelect(updatedTypes);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {availableTypes.map((type) => (
        <button
          key={type}
          onClick={() => toggleType(type)}
          className={`px-3 py-1 rounded ${
            selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default PokemonTypeFilter;
