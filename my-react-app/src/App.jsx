import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
      id: 1,
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 3,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id: 4,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id: 5,
      name: "mew",
    },
  ];

  const nextPokemon = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const previousPokemon = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const onPokemonClick = (selectedPokemon) => {
    // méthode findIndex sur le tableau pokemonList pour trouver l'index du pokemon selectionné
    const newIndex = pokemonList.findIndex(
      (pokemon) => pokemon.id === selectedPokemon.id
    );

    if (newIndex !== -1) {
      setPokemonIndex(newIndex);
    }
  };

  return (
    <div>
      <NavBar pokemonList={pokemonList} onPokemonClick={onPokemonClick} />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && <button onClick={previousPokemon}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>Suivant</button>
      )}
    </div>
  );
}

export default App;
