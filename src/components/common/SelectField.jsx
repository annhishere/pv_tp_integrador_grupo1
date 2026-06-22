const SelectField = ({
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="login-field">
      <label>{label}</label>

      <select
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;