function Navbar({ pokemonList, onPokemonClick }) {
  return (
    <div className="navbar">
      {pokemonList.map((d) => (
        <button key={d.id} onClick={() => onPokemonClick(d)}>
          {d.name}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
