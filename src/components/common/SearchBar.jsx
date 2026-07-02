// S - Componente reutilizable para la barra de búsqueda de clientes.
const SearchBar = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <input
      type="text"
      className="form-control search-bar mb-4"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;