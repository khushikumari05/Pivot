const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/pokemon', async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    const results = response.data.results;

    const detailedPokemon = await Promise.all(
      results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        return {
          id: details.data.id,
          name: details.data.name,
          types: details.data.types.map((type) => type.type.name),
          sprite: details.data.sprites.front_default,
        };
      })
    );

    res.json(detailedPokemon);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Pokemon data' });
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
