function Navbar({ pokemonIndex, pokemonList, previousPokemon, nextPokemon }) {
  return (
    <div className="navbar">
      {pokemonIndex > 0 && <button onClick={previousPokemon}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={nextPokemon}>Suivant</button>
      )}
    </div>
  );
}

export default Navbar;
