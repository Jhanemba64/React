import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const nextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const previousPokemon = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <div>
      <NavBar
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        previousPokemon={previousPokemon}
        nextPokemon={nextPokemon}
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && <button onClick={previousPokemon}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>Suivant</button>
      )}
    </div>
  );
}

export default App;
